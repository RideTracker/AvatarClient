declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITEST_AVATAR_API: string;
            VITEST_AVATAR_TOKEN: string;
        }
    }
}

export {};
