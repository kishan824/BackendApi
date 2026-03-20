import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllProducts(): {
        id: number;
        name: string;
        price: number;
        image: string;
    }[];
    getProductById(id: string): "No record found" | {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}
