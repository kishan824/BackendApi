export declare class StudentService {
    private students;
    private response;
    getAllStudents(): {
        status: boolean;
        message: string;
        data: any;
    };
    getStudentById(id: number): {
        status: boolean;
        message: string;
        data: any;
    };
    createStudent(data: {
        name: string;
        age: number;
        grade: string;
    }): {
        status: boolean;
        message: string;
        data: any;
    };
    updateStudent(id: number, data: {
        name?: string;
        age?: number;
        grade?: string;
    }): {
        status: boolean;
        message: string;
        data: any;
    };
    patchStudent(id: number, data: Partial<{
        name: string;
        age: number;
        grade: string;
    }>): {
        status: boolean;
        message: string;
        data: any;
    };
    deleteStudent(id: number): {
        status: boolean;
        message: string;
        data: any;
    };
}
