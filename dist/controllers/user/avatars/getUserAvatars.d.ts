import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";
export type GetUserAvatarsResponse = DefaultResponse & {
    avatars: {
        id: string;
        combination: string;
        timestamp: number;
    }[];
};
export declare function getUserAvatars(client: Client): Promise<GetUserAvatarsResponse>;
//# sourceMappingURL=getUserAvatars.d.ts.map