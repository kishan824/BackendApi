import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getEmployees(): {
        id: number;
        name: string;
        position: string;
    }[];
}
