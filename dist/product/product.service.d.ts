export declare class ProductService {
    private products;
    getAllProducts(): {
        id: number;
        name: string;
        price: number;
        image: string;
    }[];
    getProductById(id: number): {
        id: number;
        name: string;
        price: number;
        image: string;
    } | "No record found";
}
