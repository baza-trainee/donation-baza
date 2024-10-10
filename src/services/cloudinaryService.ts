/* eslint-disable camelcase */
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { cloudinary } from '@/lib/cloudinary';

export const uploadToCloudinary = async (
  file: File,
  fileName: string,
  folderName: string
): Promise<UploadApiResponse> => {
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = `data:${mimeType};${encoding},${base64Data}`;
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

export const deleteFromCloudinary = async (publicId: string) => {
  await cloudinary.uploader.destroy(publicId);
};
