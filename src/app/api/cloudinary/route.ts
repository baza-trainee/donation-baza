/* eslint-disable camelcase */
import { NextRequest, NextResponse } from 'next/server';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { cloudinary } from '@/lib/cloudinary';

const uploadToCloudinary = (
  fileUri: string,
  fileName: string,
  folderName: string
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        use_filename: true,
        unique_filename: true,
        folder: `donation_baza/${folderName}`,
        filename_override: fileName,
      })
      .then((result: UploadApiResponse) => {
        resolve(result);
      })
      .catch((error: UploadApiErrorResponse) => {
        reject(new Error(error.message));
      });
  });
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const folderName = formData.get('folderName') as string | null;

    if (!file) {
      return NextResponse.json(
        { message: 'No file provided' },
        { status: 400 }
      );
    }

    if (!folderName) {
      return NextResponse.json(
        { message: 'No folder name provided' },
        { status: 400 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const mimeType = file.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(fileBuffer).toString('base64');
    const fileUri = `data:${mimeType};${encoding},${base64Data}`;

    const result: UploadApiResponse = await uploadToCloudinary(
      fileUri,
      file.name,
      folderName
    );

    return NextResponse.json(
      {
        message: 'success',
        fileUrl: result.secure_url,
        fileId: result.public_id,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: `Upload failed: ${error.message}` },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
