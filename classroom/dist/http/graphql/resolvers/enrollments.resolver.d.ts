import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Enrollment } from "../models/enrollment";
export declare class EnrollmentsResolver {
    private enrollmentsServices;
    private coursesService;
    private studentService;
    constructor(enrollmentsServices: EnrollmentsService, coursesService: CoursesService, studentService: StudentsService);
    enrollments(): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
    student(enrollment: Enrollment): Promise<import(".prisma/client").Student>;
    course(enrollment: Enrollment): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course, never>;
}
