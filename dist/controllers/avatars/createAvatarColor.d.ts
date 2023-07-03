import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
export type CreateAvatarColorResponse = DefaultResponse & {
    avatar: {
        color: {
            id: string;
            type: string;
            index: number;
            defaultColor?: string;
        };
    };
};
export declare function createAvatarColor(client: Client, avatarId: string, type: string, index: number, defaultColor?: string): Promise<CreateAvatarColorResponse>;
//# sourceMappingURL=createAvatarColor.d.ts.map