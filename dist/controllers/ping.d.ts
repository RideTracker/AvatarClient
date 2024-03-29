import Client from "..";
import { DefaultResponse } from "../models/DefaultResponse";
export type PingResponse = DefaultResponse & {
    ping: string;
};
export declare function ping(client: Client): Promise<PingResponse>;
//# sourceMappingURL=ping.d.ts.map