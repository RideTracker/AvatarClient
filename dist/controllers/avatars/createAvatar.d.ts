import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
export type CreateAvatarResponse = DefaultResponse & {
    avatar: {
        id: string;
        name: string;
        type: string;
    };
    uploadUrl: string;
};
export default function createAvatar(client: Client, name: string, type: string): Promise<CreateAvatarResponse>;
//# sourceMappingURL=createAvatar.d.ts.map