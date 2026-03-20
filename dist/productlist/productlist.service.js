"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductlistService = void 0;
const common_1 = require("@nestjs/common");
let ProductlistService = class ProductlistService {
    products = [
        {
            id: 1,
            name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 10,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        },
        {
            id: 2,
            name: 'Mens Casual Premium Slim Fit T-Shirts',
            price: 20,
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
        },
    ];
    response(status, message, data) {
        return {
            status,
            message,
            data,
        };
    }
    getAllProducts() {
        try {
            if (!this.products || this.products.length === 0) {
                return this.response(false, 'No products found', []);
            }
            return this.response(true, 'Products retrieved successfully', this.products);
        }
        catch (error) {
            console.error(error);
            return this.response(false, 'Something went wrong while retrieving products', null);
        }
    }
};
exports.ProductlistService = ProductlistService;
exports.ProductlistService = ProductlistService = __decorate([
    (0, common_1.Injectable)()
], ProductlistService);
//# sourceMappingURL=productlist.service.js.map