import { Customer } from './interface/custom.interface';
import CreateCustomerDto from './DTO/create_customer_dto';
export declare class CustomerService {
    private customers;
    getAllCustomers(): Customer[];
    createCustomer(createCustomerDto: CreateCustomerDto): Customer;
}
