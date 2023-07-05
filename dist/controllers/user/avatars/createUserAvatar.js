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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAvatar = void 0;
function createUserAvatar(client, combination) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`${client.host}/api/user/avatars/create`);
        const body = {
            combination
        };
        return client.request("POST", url, undefined, JSON.stringify(body));
    });
}
exports.createUserAvatar = createUserAvatar;
;