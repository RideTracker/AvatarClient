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

export async function uploadImage(url: string, name: string, type: string, buffer: Buffer): Promise<UploadImageResponse> {
    const uint8Array = new Uint8Array(buffer);
    const blob = new Blob([ uint8Array ], { type });

    const body = new FormData();

    body.append("file", blob, name);

    const response = await fetch(url, {
        method: "POST",
        body
    });

    return await response.json();
};
