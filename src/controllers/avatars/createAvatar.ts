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

export default async function createAvatar(client: Client, name: string, type: string): Promise<CreateAvatarResponse> {
    const url = new URL(`${client.host}/api/avatars`);

    const body = {
        name,
        type
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
