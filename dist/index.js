"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAvatarColor = exports.createAvatarImage = exports.createAvatar = exports.getAvatars = exports.uploadImage = exports.ping = void 0;
const ping_1 = __importDefault(require("./controllers/ping"));
exports.ping = ping_1.default;
const uploadImage_1 = __importDefault(require("./controllers/images/uploadImage"));
exports.uploadImage = uploadImage_1.default;
const getAvatars_1 = __importDefault(require("./controllers/avatars/getAvatars"));
exports.getAvatars = getAvatars_1.default;
const createAvatar_1 = __importDefault(require("./controllers/avatars/createAvatar"));
exports.createAvatar = createAvatar_1.default;
const createAvatarImage_1 = __importDefault(require("./controllers/avatars/createAvatarImage"));
exports.createAvatarImage = createAvatarImage_1.default;
const createAvatarColor_1 = __importDefault(require("./controllers/avatars/createAvatarColor"));
exports.createAvatarColor = createAvatarColor_1.default;
class Client {
    constructor(host, token) {
        this.host = host;
        this.token = token;
    }
    ;
    request(method, url, initialHeaders, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = Object.assign({}, initialHeaders);
            if (this.token)
                headers["Authorization"] = `Bearer ${this.token}`;
            if (body)
                headers["Content-Type"] = "application/json";
            const response = yield fetch(url.toString(), {
                method,
                headers,
                body
            });
            if (response.status !== 200)
                throw new Error("Unexpected HTTP error, status code " + response.status);
            const result = yield response.json();
            return result;
        });
    }
    ;
}
exports.default = Client;
;
