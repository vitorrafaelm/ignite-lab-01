import { UseGuards } from "@nestjs/common";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { AuthUser, CurrentUser } from "src/http/auth/current-user";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Student } from "../models/student";

@Resolver(() => Student)
export class StudentResolver {

    constructor(
        private studentsService: StudentsService,
        private enrollmentService: EnrollmentsService,
    ) {

    }

    // @Query(() => Student)
    // @UseGuards(AuthorizationGuard)
    // async me(
    //     @CurrentUser() user: AuthUser
    // ) {
    //     const student = await this.studentsService.getStudentByAuthUserId(user.sub);
  
    //     return student; 
    // }

    @Query(() => [Student])
    @UseGuards(AuthorizationGuard)
    students() {
        return this.studentsService.listAllStudents();
    }

    @ResolveField()
    enrollments(
        @Parent() student: Student
    ) {
        return this.enrollmentService.listEnrollmentsByStudentId(student.id);
    }
}