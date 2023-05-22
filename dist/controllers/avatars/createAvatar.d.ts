import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
export type CreateAvatarResponse = DefaultResponse & {
    avatar: {
        id: string;
        name: string;
        type: string;
        image: string;
    };
    existingAvatar?: {
        image: string;
        images: {
            image: string;
        };
    };
};
export default function createAvatar(client: Client, name: string, type: string, image: string): Promise<CreateAvatarResponse>;
//# sourceMappingURL=createAvatar.d.ts.map