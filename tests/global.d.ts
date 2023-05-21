declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITEST_AVATAR_API: string;
            VITEST_SERVICE_TOKEN: string;
        }
    }
}

export {};
