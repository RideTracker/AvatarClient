import { ClientToken } from "./models/ClientToken";
import { Method } from "./models/Method";

export default class Client {
    userAgent: string;

    host: string;
    token?: ClientToken;

    constructor(userAgent: string, host: string, token?: ClientToken) {
        this.userAgent = userAgent;
        
        this.host = host;
        this.token = token;
    };

    async request(method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined) {
        const headers: Record<string, string> = {
            ...initialHeaders
        };

        headers["User-Agent"] = this.userAgent;

        if(this.token)
            headers["Authorization"] = `Basic ${this.token.email}:${this.token.key}`;

        if(body)
            headers["Content-Type"] = "application/json";

        const response = await fetch(url.toString(), {
            method,
            headers,
            body
        });

        if(response.status !== 200)
            throw new Error("Unexpected HTTP error, status code " + response.status);
        
        const result = await response.json();

        return result;
    };
};

export * from "./controllers/ping";

export * from "./controllers/images/uploadImage";

export * from "./controllers/avatars/getAvatars";
export * from "./controllers/avatars/createAvatar";
export * from "./controllers/avatars/createAvatarImage";
export * from "./controllers/avatars/createAvatarColor";

export * from "./controllers/user/avatars/getUserAvatars";
export * from "./controllers/user/avatars/createUserAvatar";
