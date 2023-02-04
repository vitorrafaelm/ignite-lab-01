import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface CreateStudentParams {
    authUserId: string;
}

@Injectable()
export class StudentsService {
    constructor(
        private prisma: PrismaService
    ) {}

    async listAllStudents() {
        return this.prisma.student.findMany();
    }

    async getStudentByAuthUserId(authUserId: string) {
        const student = await this.prisma.student.findUnique({
            where: {
                authUserId
            }
        });

        return student;
    }

    async getStudentById(id: string) {
        return this.prisma.student.findUnique({
            where: {
                id
            }
        })
    }

    async create({ authUserId }: CreateStudentParams) {
        return this.prisma.student.create({
            data: {
                authUserId
            }
        })
    }
}