# Details

Date : 2025-05-21 22:54:58

Directory /Users/chenle/Documents/Python/AmbuSmart/AmbuSmart

Total : 161 files,  28317 codes, 820 comments, 1710 blanks, all 30847 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.env](/.env) | Properties | 6 | 2 | 4 | 12 |
| [.ipynb_checkpoints/Untitled-checkpoint.ipynb](/.ipynb_checkpoints/Untitled-checkpoint.ipynb) | JSON | 6 | 0 | 1 | 7 |
| [.ipynb_checkpoints/huggingface-checkpoint.ipynb](/.ipynb_checkpoints/huggingface-checkpoint.ipynb) | JSON | 6 | 0 | 1 | 7 |
| [.ipynb_checkpoints/main-checkpoint.py](/.ipynb_checkpoints/main-checkpoint.py) | Python | 5 | 0 | 3 | 8 |
| [README.md](/README.md) | Markdown | 206 | 0 | 2 | 208 |
| [Untitled.ipynb](/Untitled.ipynb) | JSON | 439 | 0 | 1 | 440 |
| [app/__init__.py](/app/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/api/__init__.py](/app/api/__init__.py) | Python | 0 | 2 | 2 | 4 |
| [app/api/ambulance/ambulance_routers.py](/app/api/ambulance/ambulance_routers.py) | Python | 35 | 3 | 10 | 48 |
| [app/api/ambulance/basic_check_routers.py](/app/api/ambulance/basic_check_routers.py) | Python | 47 | 3 | 12 | 62 |
| [app/api/ambulance/operation_histories_routers.py](/app/api/ambulance/operation_histories_routers.py) | Python | 60 | 4 | 15 | 79 |
| [app/api/audio_router.py](/app/api/audio_router.py) | Python | 179 | 8 | 32 | 219 |
| [app/api/chat.py](/app/api/chat.py) | Python | 0 | 17 | 4 | 21 |
| [app/api/chat_router.py](/app/api/chat_router.py) | Python | 255 | 15 | 29 | 299 |
| [app/api/check/check_histories_routers.py](/app/api/check/check_histories_routers.py) | Python | 29 | 0 | 7 | 36 |
| [app/api/check/check_routers.py](/app/api/check/check_routers.py) | Python | 36 | 5 | 10 | 51 |
| [app/api/knowledgeGraph.py](/app/api/knowledgeGraph.py) | Python | 153 | 12 | 41 | 206 |
| [app/api/medicine/medicine_histories_routers.py](/app/api/medicine/medicine_histories_routers.py) | Python | 29 | 0 | 7 | 36 |
| [app/api/medicine/medicine_routers.py](/app/api/medicine/medicine_routers.py) | Python | 35 | 0 | 10 | 45 |
| [app/api/patient/allergy_routers.py](/app/api/patient/allergy_routers.py) | Python | 23 | 2 | 5 | 30 |
| [app/api/patient/medical_history_routers.py](/app/api/patient/medical_history_routers.py) | Python | 23 | 2 | 5 | 30 |
| [app/api/patient/patient_routers.py](/app/api/patient/patient_routers.py) | Python | 29 | 0 | 6 | 35 |
| [app/api/personnel/department_routers.py](/app/api/personnel/department_routers.py) | Python | 29 | 0 | 6 | 35 |
| [app/api/personnel/health_personnel_router.py](/app/api/personnel/health_personnel_router.py) | Python | 47 | 1 | 8 | 56 |
| [app/api/record/case_history_routers.py](/app/api/record/case_history_routers.py) | Python | 27 | 2 | 6 | 35 |
| [app/api/record/medical_record_routers.py](/app/api/record/medical_record_routers.py) | Python | 27 | 2 | 6 | 35 |
| [app/api/users.py](/app/api/users.py) | Python | 0 | 59 | 11 | 70 |
| [app/core/__init__.py](/app/core/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/core/config.py](/app/core/config.py) | Python | 6 | 9 | 6 | 21 |
| [app/core/logger.py](/app/core/logger.py) | Python | 12 | 0 | 1 | 13 |
| [app/crud/__init__.py](/app/crud/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/crud/ambulance/basic_check.py](/app/crud/ambulance/basic_check.py) | Python | 17 | 0 | 7 | 24 |
| [app/crud/ambulance/crud_ambulance.py](/app/crud/ambulance/crud_ambulance.py) | Python | 17 | 0 | 7 | 24 |
| [app/crud/ambulance/crud_operation_history.py](/app/crud/ambulance/crud_operation_history.py) | Python | 31 | 0 | 10 | 41 |
| [app/crud/case_history.py](/app/crud/case_history.py) | Python | 17 | 0 | 5 | 22 |
| [app/crud/chat.py](/app/crud/chat.py) | Python | 121 | 13 | 16 | 150 |
| [app/crud/check/check_crud.py](/app/crud/check/check_crud.py) | Python | 17 | 0 | 8 | 25 |
| [app/crud/check/check_histories_crud.py](/app/crud/check/check_histories_crud.py) | Python | 15 | 0 | 6 | 21 |
| [app/crud/crud_allergy.py](/app/crud/crud_allergy.py) | Python | 13 | 2 | 4 | 19 |
| [app/crud/crud_department.py](/app/crud/crud_department.py) | Python | 15 | 2 | 5 | 22 |
| [app/crud/crud_patient.py](/app/crud/crud_patient.py) | Python | 15 | 2 | 5 | 22 |
| [app/crud/health_personnel.py](/app/crud/health_personnel.py) | Python | 22 | 2 | 8 | 32 |
| [app/crud/medical_history.py](/app/crud/medical_history.py) | Python | 22 | 9 | 6 | 37 |
| [app/crud/medical_record.py](/app/crud/medical_record.py) | Python | 17 | 1 | 6 | 24 |
| [app/crud/medicine/medicine_crud.py](/app/crud/medicine/medicine_crud.py) | Python | 17 | 0 | 8 | 25 |
| [app/crud/medicine/medicine_histories_crud.py](/app/crud/medicine/medicine_histories_crud.py) | Python | 15 | 0 | 6 | 21 |
| [app/db/__init__.py](/app/db/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/db/base.py](/app/db/base.py) | Python | 2 | 3 | 1 | 6 |
| [app/db/session.py](/app/db/session.py) | Python | 8 | 28 | 9 | 45 |
| [app/main.py](/app/main.py) | Python | 64 | 17 | 20 | 101 |
| [app/models/__init__.py](/app/models/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/models/allergy.py](/app/models/allergy.py) | Python | 11 | 1 | 3 | 15 |
| [app/models/ambulance.py](/app/models/ambulance.py) | Python | 14 | 4 | 6 | 24 |
| [app/models/basic_check.py](/app/models/basic_check.py) | Python | 16 | 4 | 3 | 23 |
| [app/models/case_history.py](/app/models/case_history.py) | Python | 20 | 1 | 3 | 24 |
| [app/models/chat.py](/app/models/chat.py) | Python | 11 | 0 | 4 | 15 |
| [app/models/check/check.py](/app/models/check/check.py) | Python | 11 | 0 | 5 | 16 |
| [app/models/check/check_histories.py](/app/models/check/check_histories.py) | Python | 14 | 0 | 3 | 17 |
| [app/models/check/check_relationship.py](/app/models/check/check_relationship.py) | Python | 13 | 0 | 5 | 18 |
| [app/models/department.py](/app/models/department.py) | Python | 11 | 1 | 4 | 16 |
| [app/models/health_personnel.py](/app/models/health_personnel.py) | Python | 15 | 1 | 4 | 20 |
| [app/models/medical_history.py](/app/models/medical_history.py) | Python | 11 | 0 | 3 | 14 |
| [app/models/medical_record.py](/app/models/medical_record.py) | Python | 30 | 1 | 3 | 34 |
| [app/models/medicine/medicine.py](/app/models/medicine/medicine.py) | Python | 14 | 0 | 3 | 17 |
| [app/models/medicine/medicine_histories.py](/app/models/medicine/medicine_histories.py) | Python | 14 | 0 | 3 | 17 |
| [app/models/medicine/medicine_relationship.py](/app/models/medicine/medicine_relationship.py) | Python | 13 | 2 | 4 | 19 |
| [app/models/message.py](/app/models/message.py) | Python | 3 | 0 | 2 | 5 |
| [app/models/operation_history.py](/app/models/operation_history.py) | Python | 39 | 3 | 3 | 45 |
| [app/models/patient.py](/app/models/patient.py) | Python | 17 | 2 | 3 | 22 |
| [app/models/users.py](/app/models/users.py) | Python | 8 | 0 | 3 | 11 |
| [app/schemas/__init__.py](/app/schemas/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/schemas/allergy.py](/app/schemas/allergy.py) | Python | 13 | 0 | 5 | 18 |
| [app/schemas/ambulance/ambulance.py](/app/schemas/ambulance/ambulance.py) | Python | 16 | 0 | 5 | 21 |
| [app/schemas/ambulance/basic_check.py](/app/schemas/ambulance/basic_check.py) | Python | 19 | 1 | 5 | 25 |
| [app/schemas/ambulance/operation_history.py](/app/schemas/ambulance/operation_history.py) | Python | 50 | 0 | 7 | 57 |
| [app/schemas/case_history.py](/app/schemas/case_history.py) | Python | 31 | 1 | 8 | 40 |
| [app/schemas/chat.py](/app/schemas/chat.py) | Python | 17 | 0 | 5 | 22 |
| [app/schemas/check/check.py](/app/schemas/check/check.py) | Python | 14 | 0 | 4 | 18 |
| [app/schemas/check/check_histories.py](/app/schemas/check/check_histories.py) | Python | 17 | 0 | 4 | 21 |
| [app/schemas/check/check_relationship.py](/app/schemas/check/check_relationship.py) | Python | 11 | 0 | 4 | 15 |
| [app/schemas/department.py](/app/schemas/department.py) | Python | 13 | 0 | 5 | 18 |
| [app/schemas/health_personnel.py](/app/schemas/health_personnel.py) | Python | 17 | 2 | 6 | 25 |
| [app/schemas/medical_history.py](/app/schemas/medical_history.py) | Python | 14 | 0 | 4 | 18 |
| [app/schemas/medical_record.py](/app/schemas/medical_record.py) | Python | 41 | 2 | 8 | 51 |
| [app/schemas/medicine/medicine.py](/app/schemas/medicine/medicine.py) | Python | 17 | 0 | 6 | 23 |
| [app/schemas/medicine/medicine_histories.py](/app/schemas/medicine/medicine_histories.py) | Python | 17 | 0 | 5 | 22 |
| [app/schemas/medicine/medicine_relationship.py](/app/schemas/medicine/medicine_relationship.py) | Python | 11 | 0 | 4 | 15 |
| [app/schemas/patient.py](/app/schemas/patient.py) | Python | 27 | 6 | 9 | 42 |
| [app/services/__init__.py](/app/services/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/services/allergy_service.py](/app/services/allergy_service.py) | Python | 9 | 2 | 4 | 15 |
| [app/services/ambulance/ambulance.py](/app/services/ambulance/ambulance.py) | Python | 13 | 1 | 6 | 20 |
| [app/services/ambulance/basic_check.py](/app/services/ambulance/basic_check.py) | Python | 13 | 1 | 6 | 20 |
| [app/services/ambulance/operation_histories_sevice.py](/app/services/ambulance/operation_histories_sevice.py) | Python | 38 | 6 | 17 | 61 |
| [app/services/case_history_service.py](/app/services/case_history_service.py) | Python | 53 | 4 | 12 | 69 |
| [app/services/chat_service.py](/app/services/chat_service.py) | Python | 203 | 31 | 40 | 274 |
| [app/services/check/check_histories_service.py](/app/services/check/check_histories_service.py) | Python | 11 | 0 | 5 | 16 |
| [app/services/check/check_service.py](/app/services/check/check_service.py) | Python | 13 | 1 | 6 | 20 |
| [app/services/department_service.py](/app/services/department_service.py) | Python | 11 | 2 | 5 | 18 |
| [app/services/gpt_service.py](/app/services/gpt_service.py) | Python | 0 | 42 | 8 | 50 |
| [app/services/health_personnel.py](/app/services/health_personnel.py) | Python | 17 | 2 | 8 | 27 |
| [app/services/medical_history_service.py](/app/services/medical_history_service.py) | Python | 9 | 2 | 4 | 15 |
| [app/services/medical_record_service.py](/app/services/medical_record_service.py) | Python | 53 | 8 | 10 | 71 |
| [app/services/medicine/medicine_histories_service.py](/app/services/medicine/medicine_histories_service.py) | Python | 11 | 0 | 5 | 16 |
| [app/services/medicine/medicine_service.py](/app/services/medicine/medicine_service.py) | Python | 13 | 1 | 6 | 20 |
| [app/services/patient_service.py](/app/services/patient_service.py) | Python | 11 | 2 | 5 | 18 |
| [app/tests/__init__.py](/app/tests/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/utils/__init__.py](/app/utils/__init__.py) | Python | 0 | 0 | 1 | 1 |
| [app/utils/database_backup0325.sql](/app/utils/database_backup0325.sql) | MS SQL | 1,240 | 129 | 41 | 1,410 |
| [app/utils/database_backup0330.sql](/app/utils/database_backup0330.sql) | MS SQL | 1,332 | 135 | 43 | 1,510 |
| [app/utils/prompts.py](/app/utils/prompts.py) | Python | 101 | 3 | 17 | 121 |
| [app/utils/requirements.txt](/app/utils/requirements.txt) | pip requirements | 86 | 0 | 1 | 87 |
| [frontend/.env](/frontend/.env) | Properties | 3 | 0 | 2 | 5 |
| [frontend/README.md](/frontend/README.md) | Markdown | 19 | 0 | 6 | 25 |
| [frontend/babel.config.js](/frontend/babel.config.js) | JavaScript | 12 | 0 | 1 | 13 |
| [frontend/jsconfig.json](/frontend/jsconfig.json) | JSON with Comments | 22 | 0 | 1 | 23 |
| [frontend/package-lock.json](/frontend/package-lock.json) | JSON | 15,276 | 0 | 1 | 15,277 |
| [frontend/package.json](/frontend/package.json) | JSON | 76 | 0 | 1 | 77 |
| [frontend/public/index.html](/frontend/public/index.html) | HTML | 16 | 1 | 1 | 18 |
| [frontend/src/App.vue](/frontend/src/App.vue) | vue | 30 | 0 | 4 | 34 |
| [frontend/src/components/CoreButtoms/KeywordsGraph.vue](/frontend/src/components/CoreButtoms/KeywordsGraph.vue) | vue | 236 | 0 | 42 | 278 |
| [frontend/src/components/CoreButtoms/PatientInfo.vue](/frontend/src/components/CoreButtoms/PatientInfo.vue) | vue | 543 | 13 | 56 | 612 |
| [frontend/src/components/CoreButtoms/basicCheckDialogue.vue](/frontend/src/components/CoreButtoms/basicCheckDialogue.vue) | vue | 272 | 1 | 25 | 298 |
| [frontend/src/components/CoreButtoms/caseHistoryTable.vue](/frontend/src/components/CoreButtoms/caseHistoryTable.vue) | vue | 121 | 5 | 28 | 154 |
| [frontend/src/components/CoreButtoms/medicalRecordTable.vue](/frontend/src/components/CoreButtoms/medicalRecordTable.vue) | vue | 152 | 5 | 30 | 187 |
| [frontend/src/components/CoreButtoms/operationHistoryTable.vue](/frontend/src/components/CoreButtoms/operationHistoryTable.vue) | vue | 440 | 11 | 70 | 521 |
| [frontend/src/components/CoreButtoms/scoreTableDialogue.vue](/frontend/src/components/CoreButtoms/scoreTableDialogue.vue) | vue | 64 | 6 | 14 | 84 |
| [frontend/src/components/CoreButtoms/timeLineButtom.vue](/frontend/src/components/CoreButtoms/timeLineButtom.vue) | vue | 148 | 0 | 18 | 166 |
| [frontend/src/components/Independent.jsx](/frontend/src/components/Independent.jsx) | JavaScript JSX | 384 | 46 | 68 | 498 |
| [frontend/src/components/MyReactComponent.jsx](/frontend/src/components/MyReactComponent.jsx) | JavaScript JSX | 12 | 2 | 4 | 18 |
| [frontend/src/components/NavigationBars.vue](/frontend/src/components/NavigationBars.vue) | vue | 125 | 0 | 26 | 151 |
| [frontend/src/components/ScoreValueForm/CerebralStroke.vue](/frontend/src/components/ScoreValueForm/CerebralStroke.vue) | vue | 83 | 0 | 10 | 93 |
| [frontend/src/components/ScoreValueForm/GcsScore.vue](/frontend/src/components/ScoreValueForm/GcsScore.vue) | vue | 238 | 10 | 27 | 275 |
| [frontend/src/components/ScoreValueForm/KillipScore.vue](/frontend/src/components/ScoreValueForm/KillipScore.vue) | vue | 204 | 5 | 18 | 227 |
| [frontend/src/components/ScoreValueForm/TiScore.vue](/frontend/src/components/ScoreValueForm/TiScore.vue) | vue | 253 | 13 | 24 | 290 |
| [frontend/src/components/Stat/ChatWordCloud.vue](/frontend/src/components/Stat/ChatWordCloud.vue) | vue | 135 | 0 | 16 | 151 |
| [frontend/src/components/Stat/ConsistencyAnalysis.vue](/frontend/src/components/Stat/ConsistencyAnalysis.vue) | vue | 122 | 0 | 13 | 135 |
| [frontend/src/components/Stat/FormSection.vue](/frontend/src/components/Stat/FormSection.vue) | vue | 319 | 5 | 51 | 375 |
| [frontend/src/components/Stat/SmartAdvice.vue](/frontend/src/components/Stat/SmartAdvice.vue) | vue | 129 | 0 | 17 | 146 |
| [frontend/src/components/Stat/WordCloudChart.vue](/frontend/src/components/Stat/WordCloudChart.vue) | vue | 79 | 0 | 11 | 90 |
| [frontend/src/components/utils/ExitComponent.vue](/frontend/src/components/utils/ExitComponent.vue) | vue | 41 | 0 | 10 | 51 |
| [frontend/src/components/utils/KnowledgeGraph.vue](/frontend/src/components/utils/KnowledgeGraph.vue) | vue | 263 | 0 | 45 | 308 |
| [frontend/src/components/utils/mapComponent.vue](/frontend/src/components/utils/mapComponent.vue) | vue | 41 | 0 | 3 | 44 |
| [frontend/src/components/utils/withAliyunASR.jsx](/frontend/src/components/utils/withAliyunASR.jsx) | JavaScript JSX | 124 | 24 | 27 | 175 |
| [frontend/src/main.js](/frontend/src/main.js) | JavaScript | 11 | 2 | 4 | 17 |
| [frontend/src/router/index.js](/frontend/src/router/index.js) | JavaScript | 55 | 6 | 5 | 66 |
| [frontend/src/services/api.js](/frontend/src/services/api.js) | JavaScript | 5 | 0 | 3 | 8 |
| [frontend/src/services/userService.js](/frontend/src/services/userService.js) | JavaScript | 14 | 0 | 4 | 18 |
| [frontend/src/store/index.js](/frontend/src/store/index.js) | JavaScript | 15 | 0 | 2 | 17 |
| [frontend/src/views/AmbuCore.vue](/frontend/src/views/AmbuCore.vue) | vue | 104 | 3 | 27 | 134 |
| [frontend/src/views/AmbuFin.vue](/frontend/src/views/AmbuFin.vue) | vue | 210 | 0 | 29 | 239 |
| [frontend/src/views/AmbuMenu.vue](/frontend/src/views/AmbuMenu.vue) | vue | 231 | 0 | 12 | 243 |
| [frontend/src/views/AmbuPatientInfo.vue](/frontend/src/views/AmbuPatientInfo.vue) | vue | 407 | 13 | 37 | 457 |
| [frontend/src/views/AmbuStart.vue](/frontend/src/views/AmbuStart.vue) | vue | 410 | 9 | 35 | 454 |
| [frontend/src/views/AmbuStat.vue](/frontend/src/views/AmbuStat.vue) | vue | 77 | 4 | 14 | 95 |
| [frontend/src/views/Chat.vue](/frontend/src/views/Chat.vue) | vue | 179 | 0 | 26 | 205 |
| [frontend/src/views/HelloWorld.vue](/frontend/src/views/HelloWorld.vue) | vue | 55 | 1 | 3 | 59 |
| [frontend/src/views/HomePage.vue](/frontend/src/views/HomePage.vue) | vue | 30 | 0 | 5 | 35 |
| [frontend/src/views/UserManagement.vue](/frontend/src/views/UserManagement.vue) | vue | 72 | 0 | 3 | 75 |
| [frontend/src/views/test.vue](/frontend/src/views/test.vue) | vue | 172 | 4 | 21 | 197 |
| [frontend/vue.config.js](/frontend/vue.config.js) | JavaScript | 32 | 0 | 2 | 34 |
| [huggingface.ipynb](/huggingface.ipynb) | JSON | 195 | 0 | 1 | 196 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)