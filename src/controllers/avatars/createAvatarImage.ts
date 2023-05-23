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

export default async function createAvatarImage(client: Client, avatarId: string, index: number, colorType?: string): Promise<CreateAvatarImageResponse> {
    const url = new URL(`/api/avatars/${avatarId}/image`, client.host);

    const body = {
        index,
        colorType
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
