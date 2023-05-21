import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetAvatarsResponse = DefaultResponse & {
    avatars: {
        id: string;
        type: string;
        image: string;

        colors: {
            type: string;
            index: number;
            defaultColor: string;
        }[];

        images: {
            index: number;
            image: string;
            colorType: string;
        }[];
    }[];
};

export default async function getAvatars(client: Client): Promise<GetAvatarsResponse> {
    const url = new URL("/api/avatars", client.host);

    return client.request("GET", url);
};
