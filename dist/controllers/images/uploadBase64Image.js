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
exports.uploadBase64Image = void 0;
const uploadImage_1 = require("./uploadImage");
function uploadBase64Image(url, name, type, base64) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, uploadImage_1.uploadImage)(url, name, type, Buffer.from(base64.split(';base64,')[1], 'base64'));
    });
}
exports.uploadBase64Image = uploadBase64Image;
;
