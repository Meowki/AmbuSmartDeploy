/* eslint-disable no-unused-vars */
import {
  Attachments,
  Bubble,
  Prompts,
  Sender,
  useXAgent,
  useXChat,
} from "@ant-design/x";
import { createStyles } from "antd-style";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {
  PaperClipOutlined,
  UserOutlined,
  RobotOutlined,
  MedicineBoxOutlined,
  FileDoneOutlined,
  HeartOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Typography, message } from "antd";
import markdownit from "markdown-it";
import { XStream } from "@ant-design/x";
import withAliyunASR from './utils/withAliyunASR';

const EnhancedSender = withAliyunASR(Sender);

// 头像与气泡位置
const userAvatar = { color: "#fff", backgroundColor: "#1677ff" }; // 用户头像
const robotAvatar = { color: "#f56a00", backgroundColor: "#fde3cf" }; // AI 头像

// 下一步：把患者的所有基本信息导进来，生成患者情况
// 加入患者主诉得到初步诊断并保存进数据库，message提示
// 如何能在vue timeline跳转之前，实现对 药物、操作流程的输出和保存，
// 还有最终结果的保存（让ai只能从一些范围内选择，不能长）
// 然后 chat就先到这里，后面再回头加数据集模拟优化。做Stats去。Stats后面就是最终报告生成。
// 再下面就是知识图谱，看能不能放到core页面。

// 主诉这一块可以用ai来优化病人的描述。（放Stat里吧）

// prompts 按钮
const items = [
  {
    key: "patient_basic_analysis",
    icon: <UserOutlined style={{ color: "#722ed1" }} />, // 可以换其他图标
    label: "分析患者基础信息", // 你可以自定义更贴切的文案
  },
  {
    key: "initial_diagnosis",
    icon: <MedicineBoxOutlined style={{ color: "#FF4D4F" }} />,
    label: "初步诊断",
  },
  {
    key: "procedures_medicine_summary",
    icon: <FileDoneOutlined style={{ color: "#1890FF" }} />,
    label: "整理急救操作与药物记录",
  },
  {
    key: "final_emergency_result",
    icon: <HeartOutlined style={{ color: "#52C41A" }} />,
    label: "生成最终急救结果总结",
  },
  // {
  //   key: "standard_advice",
  //   icon: <PlusCircleOutlined style={{ color: "#FAAD14" }} />,
  //   label: "快速生成标准急救建议",
  // },
];

// 样式定义
const useStyle = createStyles(({ token, css }) => ({
  layout: css`
    width: 100%;
    min-width: 800px;
    height: 550px;
    border-radius: ${token.borderRadius}px;
    display: flex;
    flex-direction: column;
    background: ${token.colorBgContainer};
    font-family: AlibabaPuHuiTi, ${token.fontFamily}, sans-serif;
  `,
  chat: css`
    height: 100%;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 16px;
  `,
  messages: css`
    flex: 1;
    overflow-y: auto;
    padding-bottom: 10px;
  `,
  sender: css`
    box-shadow: ${token.boxShadow};
  `,
}));

// 角色设定
const roles = {
  ai: {
    placement: "start",
    typing: { step: 5, interval: 20 },
    avatar: <Avatar icon={<RobotOutlined />} style={robotAvatar} />,
  },
  user: {
    placement: "end",
    variant: "shadow",
    avatar: <Avatar icon={<UserOutlined />} style={userAvatar} />,
  },
};

const Independent = ({ operationId }) => {
  const { styles } = useStyle();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAborted, setIsAborted] = useState(false);
  const [recording, setRecording] = useState(false);
  const [interimText, setInterimText] = useState('');
  const md = markdownit({ html: true, breaks: true });

  //打断流式输出
  const abortControllerRef = useRef(new AbortController());
  useEffect(() => {
    return () => abortControllerRef.current.abort();
  }, []);

  const renderMarkdown = (content) => (
    <Typography>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </Typography>
  );

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "你好，我是你的医疗 AI 助手，请问有什么需要帮助的吗？",
    },
  ]);
  const [attachedFiles, setAttachedFiles] = useState([]);

  // AI 请求函数（XStream 重构版）
  const requestAI = async (payload, { onSuccess, onError }) => {
    const { message, prompt_type } = payload.message;
    console.log("[FRONT] 🌐 开始请求:", { prompt_type, message });

    let aiResponse = "";
    setLoading(true);
    setIsAborted(false);

    // 创建新的 AbortController
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      console.log("[FRONT] 🚀 开始请求:", { prompt_type});
      const response = await fetch(`/api/chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          operation_id: parseInt(operationId, 10),
          message,
          prompt_type,
        }),
        signal,
      });

      console.log("[FRONT] 🔌 连接已建立，状态:", response.status);
      if (!response.body) throw new Error("后端无流式返回");

      // 简单地用 XStream 处理流数据
      const stream = XStream({ readableStream: response.body });
      for await (const chunk of stream) {
        console.log("[FRONT] 收到 chunk:", chunk);
        if (signal.aborted) {
          console.log("[FRONT] 🚫 流处理被中止");
          break;
        }

        // 假设 chunk 格式类似 { data: ' {"response": "文本内容"}' }
        const jsonStr = chunk.data;
        try {
          const data = JSON.parse(jsonStr);
          if (data.response) {
            aiResponse += data.response;
            console.log("[FRONT] 累积 aiResponse:", aiResponse);
            ReactDOM.flushSync(() => {
              setMessages((prev) => {
                const lastMsg = prev[prev.length - 1];
                return [
                  ...prev.slice(0, -1),
                  { ...lastMsg, content: aiResponse },
                ];
              });
            });
          }
        } catch (e) {
          console.error("JSON 解析错误:", e, "chunk:", chunk);
        }
      }

      if (!signal.aborted) {
        onSuccess(aiResponse);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("[FRONT] ⏹ 请求已取消");
        setMessages((prev) => {
          const lastMsg = prev[prev.length - 1];
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, content: `${lastMsg.content}（已取消）` },
          ];
        });
      } else {
        console.error("API 请求失败:", error);
        onError();
      }
    } finally {
      setLoading(false);
    }
  };

  const [agent] = useXAgent({ request: requestAI });
  const { onRequest } = useXChat({
    agent,
    getMessage: (payload) => payload.message.message,
    getMeta: (payload) => ({ prompt_type: payload.message.prompt_type }),
  });

  const [currentPromptType, setCurrentPromptType] = useState("standard_advice");

  useEffect(() => {
    if (!operationId) return;
  
    // 初始化消息
    setMessages([
      {
        role: "ai",
        content: "你好，我是你的医疗 AI 助手，请问有什么需要帮助的吗？",
      },
    ]);
  
    // 创建专用 AbortController
    const autoAnalysisAbortController = new AbortController();
  
    const triggerPatientBasicAnalysis = async () => {
      // 添加加载状态
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "正在自动分析患者基础信息..." },
      ]);
      setLoading(true);
      setIsAborted(false);

      setCurrentPromptType("patient_basic_analysis");
  
      try {
        const response = await fetch(`/api/chat/auto/${operationId}`, {
          signal: autoAnalysisAbortController.signal,
        });
  
        console.log("[FRONT] 🚀 自动分析连接状态:", response.status);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        if (!response.body) throw new Error("后端无流式返回");
 
        // 使用 XStream 处理流数据
        const stream = XStream({ readableStream: response.body });
        let aiResponse = "";
  
        for await (const chunk of stream) {
          if (autoAnalysisAbortController.signal.aborted) {
            console.log("[FRONT] ⏹ 自动分析已中止");
            break;
          }
  
          try {
            const jsonStr = chunk.data;
            const data = JSON.parse(jsonStr);
            
            if (data.response) {
              aiResponse += data.response;
              // 同步更新 UI
              ReactDOM.flushSync(() => {
                setMessages((prev) => {
                  const lastMsg = prev[prev.length - 1];
                  return [
                    ...prev.slice(0, -1),
                    { ...lastMsg, content: aiResponse },
                  ];
                });
              });
            }
          } catch (e) {
            console.error("JSON 解析错误:", e, "原始数据:", chunk);
          }
        }
  
        // 完成后更新状态
        if (!autoAnalysisAbortController.signal.aborted) {
          message.success("患者分析完成");
        }
      } catch (error) {
        handleAutoAnalysisError(error);
      } finally {
        setLoading(false);
      }
    };
  
    // 错误处理函数
    const handleAutoAnalysisError = (error) => {
      if (error.name === 'AbortError') {
        console.log("[FRONT] ⏹ 用户取消自动分析");
        return;
      }
  
      console.error("自动分析请求失败：", error);
      message.error("分析失败: " + (error.message || "服务器错误"));
  
      // 回退 UI 状态
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { 
          role: "ai", 
          content: "⚠️ 分析失败: " + (error.message || "请联系管理员")
        }
      ]);
    };
  
    // 延迟触发并记录定时器
    const analysisTimer = setTimeout(() => {
      triggerPatientBasicAnalysis();
    }, 600);
  
    // 清理函数
    return () => {
      clearTimeout(analysisTimer);
      autoAnalysisAbortController.abort();
      console.log("[FRONT] 🧹 清理自动分析资源");
    };
  }, [operationId]); // 确保依赖项正确

  // 提交事件
  const onSubmit = (nextContent) => {
    if (!nextContent) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: nextContent },
      { role: "ai", content: "..." },
    ]);


    onRequest({
      message: nextContent,
      prompt_type: "standard_advice",
    });

    setCurrentPromptType("standard_advice");

    console.log(
      "nextContent:" + nextContent + "currentPromptType:" + currentPromptType
    );

    setContent("");
  };

  // 新增 Prompt 按钮的选择事件
  const onPromptSelect = (item) => {
    if (loading) return;
    const promptType = item.data.key;
    const promptDescription = item.data.label;

    setCurrentPromptType(promptType);

    console.log(
      "promptDescription:" + promptDescription + "promptType:" + promptType
    );

    if (!operationId) {
      console.error("operationId不存在，无法发送请求");
      return;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: promptDescription },
      { role: "ai", content: "..." },
    ]);

    onRequest({
      message: promptDescription,
      prompt_type: promptType,
    });
  };

  // 强化版取消逻辑
  const onCancel = () => {
    console.log("[FRONT] 🚫 用户取消操作");

    // 终止当前请求
    abortControllerRef.current.abort();

    // 重置状态
    setIsAborted(true);
    setLoading(false);

    // 强制关闭所有连接
    if (typeof EventSource !== "undefined") {
      // 定义一个数组来存储所有打开的 EventSource 连接
      const eventSources = [];

      // eslint-disable-next-line 
      function createEventSource(url) {
        const es = new EventSource(url);
        eventSources.push(es);
        return es;
      }

      // eslint-disable-next-line 
      function closeAllEventSources() {
        eventSources.forEach((es) => es.close());
        eventSources.length = 0; // 清空数组
      }

      // 使用时：
      // eslint-disable-next-line 
      const es = createEventSource("/your-server-endpoint");

      // 关闭所有 SSE 连接
      closeAllEventSources();
    }

    // 发送显式中断信号到后端
    fetch(`/api/chat/abort/${operationId}_${currentPromptType}`, { method: "POST" }).catch((e) =>
      console.log("中断信号发送失败:", e)
    );

    // 更新消息状态
    setMessages((prev) => {
      const lastMsg = prev[prev.length - 1];
      return prev.slice(0, -1).concat({
        ...lastMsg,
        content: `${lastMsg.content}\n(请求已主动取消)`,
      });
    });
  };

  const handleFileChange = (info) => setAttachedFiles(info.fileList);
  const attachmentsNode = (
    <Badge dot={attachedFiles.length > 0}>
      <Button type="text" icon={<PaperClipOutlined />} />
    </Badge>
  );

  return (
    <div className={styles.layout}>
      <div className={styles.chat}>
        <Bubble.List
          items={messages.map((msg, index) => ({
            ...msg,
            messageRender: msg.role === "ai" ? renderMarkdown : undefined,
            loading:
              msg.role === "ai" && index === messages.length - 1 && loading,
          }))}
          roles={roles}
          className={styles.messages}
          typing={{ step: 2, interval: 50 }}
        />

        <Prompts items={items} wrap onItemClick={onPromptSelect} disabled={loading} />

        <EnhancedSender
      value={content}  // 合并最终文本和中间文本
      onSubmit={onSubmit}
      onChange={setContent}
      loading={loading}
      onCancel={onCancel}
      className={styles.sender}
      allowSpeech={{
        recording,  // 控制录音的状态
        onRecordingChange: (nextRecording) => {
          setRecording(nextRecording);
        },
      }}
    />
        
      </div>
    </div>
  );
};

export default Independent;
