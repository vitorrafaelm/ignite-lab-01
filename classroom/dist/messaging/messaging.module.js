"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const courses_service_1 = require("../services/courses.service");
const enrollments_service_1 = require("../services/enrollments.service");
const students_service_1 = require("../services/students.service");
const purchase_controller_1 = require("./controllers/purchase.controller");
let MessagingModule = class MessagingModule {
};
MessagingModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [purchase_controller_1.PurchaseController],
        providers: [
            students_service_1.StudentsService,
            courses_service_1.CoursesService,
            enrollments_service_1.EnrollmentsService
        ]
    })
], MessagingModule);
exports.MessagingModule = MessagingModule;
//# sourceMappingURL=messaging.module.js.map