"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const open_1 = __importDefault(require("open"));
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const port = 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(port);
    await (0, open_1.default)(`http://localhost:${port}`);
    app.enableShutdownHooks();
}
bootstrap();
//# sourceMappingURL=main.js.map