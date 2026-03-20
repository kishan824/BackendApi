export declare class DatabaseService {
    private isConnected;
    onModuleInit(signal?: string): void;
    onApplicationShutdown(signal?: string): void;
    getConnectionStatus(): "Connected to the database" | "Disconnected from the database";
}
