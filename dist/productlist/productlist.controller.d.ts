import { ProductlistService } from './productlist.service';
export declare class ProductlistController {
    private productlistService;
    constructor(productlistService: ProductlistService);
    getAllProducts(): {
        status: boolean;
        message: string;
        data: any;
    };
}
