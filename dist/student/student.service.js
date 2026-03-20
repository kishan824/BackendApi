"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    students = [
        { id: 1, name: 'Student 1', age: 20, grade: 'A' },
        { id: 2, name: 'Student 2', age: 22, grade: 'B' },
        { id: 3, name: 'Student 3', age: 21, grade: 'A' },
    ];
    response(status, message, data) {
        return {
            status,
            message,
            data,
        };
    }
    getAllStudents() {
        return this.response(true, 'Record Retrieve Successfully.', this.students);
    }
    getStudentById(id) {
        const student = this.students.find((s) => s.id === id);
        if (!student)
            throw new common_1.NotFoundException('No record found');
        return this.response(true, 'Record Retrieve Successfully.', student);
    }
    createStudent(data) {
        const newStudent = {
            id: this.students.length + 1,
            ...data,
        };
        this.students.push(newStudent);
        return this.response(true, 'Student created successfully.', newStudent);
    }
    updateStudent(id, data) {
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1)
            throw new common_1.NotFoundException('No record found');
        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...data,
        };
        return this.response(true, 'Student updated successfully.', this.students[studentIndex]);
    }
    patchStudent(id, data) {
        const student = this.students.find((s) => s.id === id);
        if (!student)
            throw new common_1.NotFoundException('No record found');
        Object.assign(student, data);
        return this.response(true, 'Student patched successfully.', student);
    }
    deleteStudent(id) {
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1)
            throw new common_1.NotFoundException('No record found');
        const deletedStudent = this.students.splice(studentIndex, 1);
        return this.response(true, 'Student deleted successfully.', deletedStudent[0]);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map