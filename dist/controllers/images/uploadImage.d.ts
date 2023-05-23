/// <reference types="node" />
export type UploadImageResponse = {
    result: {
        id?: string;
        uploadURL?: string;
    };
    errors: {
        code: number;
        message: string;
    }[];
    messages: {
        code: number;
        message: string;
    }[];
    success: boolean;
};
export default function uploadImage(url: string, name: string, type: string, buffer: Buffer): Promise<UploadImageResponse>;
//# sourceMappingURL=uploadImage.d.ts.map