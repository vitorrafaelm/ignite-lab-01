"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const courses_service_1 = require("../../services/courses.service");
const enrollments_service_1 = require("../../services/enrollments.service");
const students_service_1 = require("../../services/students.service");
let PurchaseController = class PurchaseController {
    constructor(studentService, coursesService, enrollmentsService) {
        this.studentService = studentService;
        this.coursesService = coursesService;
        this.enrollmentsService = enrollmentsService;
    }
    async purchaseCreated(payload) {
        console.log(payload);
        let student = await this.studentService.getStudentByAuthUserId(payload.customer.authUserId);
        if (!student) {
            student = await this.studentService.create({ authUserId: payload.customer.authUserId });
        }
        let course = await this.coursesService.getCourseBySlug(payload.product.slug);
        if (!course) {
            course = await this.coursesService.createCourse({
                title: payload.product.title,
                slug: payload.product.slug,
            });
        }
        await this.enrollmentsService.createEnrollment({
            courseId: course.id,
            studentId: student.id
        });
    }
};
__decorate([
    (0, microservices_1.EventPattern)('purchases.new-purchase'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "purchaseCreated", null);
PurchaseController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [students_service_1.StudentsService,
        courses_service_1.CoursesService,
        enrollments_service_1.EnrollmentsService])
], PurchaseController);
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=purchase.controller.js.map