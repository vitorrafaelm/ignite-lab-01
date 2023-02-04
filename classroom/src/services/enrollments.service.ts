import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface GetByCourseAndStudentIdParams {
    courseId: string;
    studentId: string;
}

interface CreateEnrollmentParams {
    courseId: string;
    studentId: string;
}

@Injectable()
export class EnrollmentsService {
    constructor(
        private prisma: PrismaService
    ) {}

    getByCourseAndStudentId({ courseId, studentId }: GetByCourseAndStudentIdParams) {
        return this.prisma.enrollment.findFirst({
            where: {
                courseId, 
                studentId, 
                canceledAt: null
            }
        });
    }

    listAllEnrollments() {
        return this.prisma.enrollment.findMany({
            where: {
                canceledAt: null,
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    listEnrollmentsByStudentId(studentId: string) {
        return this.prisma.enrollment.findMany({
            where: {
                studentId,
                canceledAt: null
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    createEnrollment({ courseId, studentId }: CreateEnrollmentParams) {
        return this.prisma.enrollment.create({
            data: {
                courseId, 
                studentId, 
                canceledAt: null
            }
        });
    }
}