import { Method } from "./models/Method";
export default class Client {
    host: string;
    token?: string;
    constructor(host: string, token?: string);
    request(method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any>;
}
export * from "./controllers/ping";
export * from "./controllers/images/uploadImage";
export * from "./controllers/avatars/getAvatars";
export * from "./controllers/avatars/createAvatar";
export * from "./controllers/avatars/createAvatarImage";
export * from "./controllers/avatars/createAvatarColor";
//# sourceMappingURL=index.d.ts.map