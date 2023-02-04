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
exports.CoursesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const authorization_guard_1 = require("../../auth/authorization.guard");
const current_user_1 = require("../../auth/current-user");
const courses_service_1 = require("../../../services/courses.service");
const enrollments_service_1 = require("../../../services/enrollments.service");
const students_service_1 = require("../../../services/students.service");
const create_course_input_1 = require("../inputs/create-course-input");
const course_1 = require("../models/course");
const student_1 = require("../models/student");
let CoursesResolver = class CoursesResolver {
    constructor(coursesService, studentsServices, enrollmentsServices) {
        this.coursesService = coursesService;
        this.studentsServices = studentsServices;
        this.enrollmentsServices = enrollmentsServices;
    }
    courses() {
        return this.coursesService.listAllCouses();
    }
    async course(id, user) {
        const student = await this.studentsServices.getStudentByAuthUserId(user.sub);
        if (!student) {
            throw new Error('Student not found');
        }
        const enrollment = this.enrollmentsServices.getByCourseAndStudentId({
            courseId: id,
            studentId: student.id
        });
        if (!enrollment) {
            throw new common_1.UnauthorizedException();
        }
        return this.coursesService.getCourseById(id);
    }
    createCourse(data) {
        return this.coursesService.createCourse(data);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [course_1.Course]),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "courses", null);
__decorate([
    (0, graphql_1.Query)(() => course_1.Course),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CoursesResolver.prototype, "course", null);
__decorate([
    (0, graphql_1.Mutation)(() => course_1.Course),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_input_1.CreateCourseInput]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "createCourse", null);
CoursesResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_1.Student),
    __metadata("design:paramtypes", [courses_service_1.CoursesService,
        students_service_1.StudentsService,
        enrollments_service_1.EnrollmentsService])
], CoursesResolver);
exports.CoursesResolver = CoursesResolver;
//# sourceMappingURL=courses.resolver.js.map