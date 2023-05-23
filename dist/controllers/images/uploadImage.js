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
function uploadImage(url, name, type, buffer) {
    return __awaiter(this, void 0, void 0, function* () {
        const uint8Array = new Uint8Array(buffer);
        const blob = new Blob([uint8Array], { type });
        const body = new FormData();
        body.append("file", blob, name);
        const response = yield fetch(url, {
            method: "POST",
            body
        });
        return yield response.json();
    });
}
exports.default = uploadImage;
;
