import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
export type CreateAvatarImageResponse = DefaultResponse & {
    image: {
        id: string;
        index: number;
        colorType?: string;
    };
    uploadUrl: string;
};
export declare function createAvatarImage(client: Client, avatarId: string, index: number, colorType?: string): Promise<CreateAvatarImageResponse>;
//# sourceMappingURL=createAvatarImage.d.ts.map