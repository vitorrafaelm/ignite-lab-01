import { AuthUser } from "src/http/auth/current-user";
import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { CreateCourseInput } from "../inputs/create-course-input";
export declare class CoursesResolver {
    private coursesService;
    private studentsServices;
    private enrollmentsServices;
    constructor(coursesService: CoursesService, studentsServices: StudentsService, enrollmentsServices: EnrollmentsService);
    courses(): import(".prisma/client").PrismaPromise<import(".prisma/client").Course[]>;
    course(id: string, user: AuthUser): Promise<import(".prisma/client").Course>;
    createCourse(data: CreateCourseInput): Promise<import(".prisma/client").Course>;
}
