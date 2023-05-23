import { Method } from "./models/Method";
import ping from "./controllers/ping";
import uploadImage from "./controllers/images/uploadImage";
import getAvatars from "./controllers/avatars/getAvatars";
import createAvatar from "./controllers/avatars/createAvatar";
import createAvatarImage from "./controllers/avatars/createAvatarImage";
import createAvatarColor from "./controllers/avatars/createAvatarColor";
export { ping, uploadImage, getAvatars, createAvatar, createAvatarImage, createAvatarColor };
export default class Client {
    host: string;
    token?: string;
    constructor(host: string, token?: string);
    request(method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map