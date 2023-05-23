import uploadImage, { UploadImageResponse } from "./uploadImage";

export default async function uploadBase64Image(url: string, name: string, type: string, base64: string): Promise<UploadImageResponse> {
    return uploadImage(url, name, type, Buffer.from(base64.split(';base64,')[1], 'base64'));
};
