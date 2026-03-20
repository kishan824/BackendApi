import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudents(): {
        status: boolean;
        message: string;
        data: any;
    };
    getStudentById(id: string): {
        status: boolean;
        message: string;
        data: any;
    };
    createStudent(body: {
        name: string;
        age: number;
        grade: string;
    }): {
        status: boolean;
        message: string;
        data: any;
    };
    updateStudent(id: string, body: {
        name?: string;
        age?: number;
        grade?: string;
    }): {
        status: boolean;
        message: string;
        data: any;
    };
    patchStudent(id: string, body: Partial<{
        name: string;
        age: number;
        grade: string;
    }>): {
        status: boolean;
        message: string;
        data: any;
    };
    deleteStudent(id: string): {
        status: boolean;
        message: string;
        data: any;
    };
}
