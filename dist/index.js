"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
__exportStar(require("./controllers/ping"), exports);
__exportStar(require("./controllers/images/uploadImage"), exports);
__exportStar(require("./controllers/avatars/getAvatars"), exports);
__exportStar(require("./controllers/avatars/createAvatar"), exports);
__exportStar(require("./controllers/avatars/createAvatarImage"), exports);
__exportStar(require("./controllers/avatars/createAvatarColor"), exports);
