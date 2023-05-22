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
export default function getAvatars(client: Client): Promise<GetAvatarsResponse>;
//# sourceMappingURL=getAvatars.d.ts.map