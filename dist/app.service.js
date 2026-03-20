"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
class AppService {
    logger = new common_1.Logger(AppService.name);
    getHello() {
        const name = "Kishan";
        this.logger.log(`Name is: ${name}`);
        return name;
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map