import { EvService } from './ev.service';
export declare class EvController {
    private evService;
    constructor(evService: EvService);
    getDbUrl(): string | undefined;
}
