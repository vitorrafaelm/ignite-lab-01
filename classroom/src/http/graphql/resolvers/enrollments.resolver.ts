import { UseGuards } from "@nestjs/common";
import { Resolver, Query, ResolveField, Parent } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Enrollment } from "../models/enrollment";

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
    constructor(
        private enrollmentsServices: EnrollmentsService,
        private coursesService: CoursesService,
        private studentService: StudentsService,
    ) {

    }

    @Query(() => [Enrollment])
    @UseGuards(AuthorizationGuard)
    enrollments() {
        return this.enrollmentsServices.listAllEnrollments();
    }

    @ResolveField()
    student(
        @Parent() enrollment: Enrollment
    ) {
        return this.studentService.getStudentById(enrollment.studentId);
    }

    @ResolveField()
    course(
        @Parent() enrollment: Enrollment
    ) {
        return this.coursesService.getCourseById(enrollment.courseId);
    }
}