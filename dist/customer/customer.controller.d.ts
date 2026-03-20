import { CustomerService } from './customer.service';
import CreateCustomerDto from './DTO/create_customer_dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getAllCustomers(): import("./interface/custom.interface").Customer[];
    createCustomer(createCustomerDto: CreateCustomerDto): import("./interface/custom.interface").Customer;
}
