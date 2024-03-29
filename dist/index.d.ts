import { ClientToken } from "./models/ClientToken";
import { Method } from "./models/Method";
export default class Client {
    userAgent: string;
    host: string;
    token?: ClientToken;
    constructor(userAgent: string, host: string, token?: ClientToken);
    request(method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any>;
}
export * from "./controllers/ping";
export * from "./controllers/images/uploadImage";
export * from "./controllers/avatars/getAvatars";
export * from "./controllers/avatars/createAvatar";
export * from "./controllers/avatars/createAvatarImage";
export * from "./controllers/avatars/createAvatarColor";
export * from "./controllers/user/avatars/getUserAvatars";
export * from "./controllers/user/avatars/createUserAvatar";
//# sourceMappingURL=index.d.ts.map