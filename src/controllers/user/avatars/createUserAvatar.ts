import Client from "../../..";
import { AvatarCombination } from "../../../models/AvatarCombination";
import { DefaultResponse } from "../../../models/DefaultResponse";

export async function createUserAvatar(client: Client, combination: AvatarCombination[]): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/user/avatars/create`);

    const body = {
        combination
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
