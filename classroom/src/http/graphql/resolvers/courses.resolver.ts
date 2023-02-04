import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { AuthUser, CurrentUser } from "src/http/auth/current-user";
import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { CreateCourseInput } from "../inputs/create-course-input";
import { Course } from "../models/course";
import { Student } from "../models/student";

@Resolver(() => Student)
export class CoursesResolver {

    constructor(
        private coursesService: CoursesService,
        private studentsServices: StudentsService,
        private enrollmentsServices: EnrollmentsService,
    ) {

    }

    @Query(() => [Course])
    @UseGuards(AuthorizationGuard)
    courses() {
        return this.coursesService.listAllCouses();
    }

    @Query(() => Course)
    @UseGuards(AuthorizationGuard)
    async course(
        @Args('id') id: string,
        @CurrentUser() user: AuthUser
    ) {
        const student = await this.studentsServices.getStudentByAuthUserId(user.sub); 

        if(!student) {
            throw new Error('Student not found');
        }

        const enrollment = this.enrollmentsServices.getByCourseAndStudentId({
            courseId: id, 
            studentId: student.id
        })

        if(!enrollment) {
            throw new UnauthorizedException();
        }

        return this.coursesService.getCourseById(id)
    }

    @Mutation(() => Course)
    @UseGuards(AuthorizationGuard)
    createCourse(
        @Args('data') data: CreateCourseInput
    ) {
        return this.coursesService.createCourse(data);
    }

}