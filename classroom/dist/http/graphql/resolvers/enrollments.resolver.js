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
exports.EnrollmentsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const authorization_guard_1 = require("../../auth/authorization.guard");
const courses_service_1 = require("../../../services/courses.service");
const enrollments_service_1 = require("../../../services/enrollments.service");
const students_service_1 = require("../../../services/students.service");
const enrollment_1 = require("../models/enrollment");
let EnrollmentsResolver = class EnrollmentsResolver {
    constructor(enrollmentsServices, coursesService, studentService) {
        this.enrollmentsServices = enrollmentsServices;
        this.coursesService = coursesService;
        this.studentService = studentService;
    }
    enrollments() {
        return this.enrollmentsServices.listAllEnrollments();
    }
    student(enrollment) {
        return this.studentService.getStudentById(enrollment.studentId);
    }
    course(enrollment) {
        return this.coursesService.getCourseById(enrollment.courseId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [enrollment_1.Enrollment]),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "enrollments", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enrollment_1.Enrollment]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "student", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enrollment_1.Enrollment]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "course", null);
EnrollmentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => enrollment_1.Enrollment),
    __metadata("design:paramtypes", [enrollments_service_1.EnrollmentsService,
        courses_service_1.CoursesService,
        students_service_1.StudentsService])
], EnrollmentsResolver);
exports.EnrollmentsResolver = EnrollmentsResolver;
//# sourceMappingURL=enrollments.resolver.js.map