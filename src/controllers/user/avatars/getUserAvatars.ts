import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetUserAvatarsResponse = DefaultResponse & {
    avatars: {
        id: string;
        combination: string;
        timestamp: number;
    }[];
};

export async function getUserAvatars(client: Client): Promise<GetUserAvatarsResponse> {
    const url = new URL(`${client.host}/api/user/avatars`);

    return client.request("GET", url);
};
