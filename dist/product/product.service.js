"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            image: 'https://example.com/product3.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            image: 'https://example.com/product3.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30,
            image: 'https://example.com/product3.jpg',
        },
    ];
    getAllProducts() {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        return product ? product : "No record found";
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
//# sourceMappingURL=product.service.js.map