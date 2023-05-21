import { describe, expect, test } from "vitest";
import Client, * as tests from "../src/index";

describe("Smoke tests", () => {
    const client = new Client(process.env.VITEST_AVATAR_API, process.env.VITEST_SERVICE_TOKEN);

    test("ping", async () => {
        const response = await tests.ping(client);

        expect(response.success).toBe(true);
    });
});
