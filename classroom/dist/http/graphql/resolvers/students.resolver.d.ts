import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
import { Student } from "../models/student";
export declare class StudentResolver {
    private studentsService;
    private enrollmentService;
    constructor(studentsService: StudentsService, enrollmentService: EnrollmentsService);
    students(): Promise<import(".prisma/client").Student[]>;
    enrollments(student: Student): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
}
