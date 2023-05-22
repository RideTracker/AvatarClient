import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
export type CreateAvatarImageResponse = DefaultResponse & {
    avatar: {
        image: {
            id: string;
            image: string;
            index: number;
            colorType?: string;
        };
    };
};
export default function createAvatarImage(client: Client, avatarId: string, image: string, index: number, colorType?: string): Promise<CreateAvatarImageResponse>;
//# sourceMappingURL=createAvatarImage.d.ts.map