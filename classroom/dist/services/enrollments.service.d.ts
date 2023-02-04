import { PrismaService } from "src/database/prisma/prisma.service";
interface GetByCourseAndStudentIdParams {
    courseId: string;
    studentId: string;
}
interface CreateEnrollmentParams {
    courseId: string;
    studentId: string;
}
export declare class EnrollmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    getByCourseAndStudentId({ courseId, studentId }: GetByCourseAndStudentIdParams): import(".prisma/client").Prisma.Prisma__EnrollmentClient<import(".prisma/client").Enrollment, never>;
    listAllEnrollments(): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
    listEnrollmentsByStudentId(studentId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Enrollment[]>;
    createEnrollment({ courseId, studentId }: CreateEnrollmentParams): import(".prisma/client").Prisma.Prisma__EnrollmentClient<import(".prisma/client").Enrollment, never>;
}
export {};
