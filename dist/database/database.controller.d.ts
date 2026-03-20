import { DatabaseService } from './database.service';
export declare class DatabaseController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getStatus(): "Connected to the database" | "Disconnected from the database";
    shutdown(): string;
}
