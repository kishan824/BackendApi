import { ConfigService } from '@nestjs/config';
export declare class EvService {
    private configureService;
    constructor(configureService: ConfigService);
    geDbUrl(): string | undefined;
}
