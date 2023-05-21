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

export default async function createAvatarImage(client: Client, avatarId: string, image: string, index: number, colorType?: string): Promise<CreateAvatarImageResponse> {
    const url = new URL(`/api/avatars/${avatarId}/color`, client.host);

    const body = {
        image,
        index,
        colorType
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
