import { NextResponse } from 'next/server';
import { UploadApiResponse } from 'cloudinary';
import prisma from '@/lib/prisma';
import { uploadToCloudinary } from '@/utils/cloudinaryService';

export async function GET() {
  try {
    const documents = await prisma.document.findMany();
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const values = await request.formData();
    const key = values.get('key') as string | null;
    const file = values.get('file') as File | null;

    if (!key || !file) {
      return NextResponse.json(
        { message: 'Key and file are required.' },
        { status: 400 }
      );
    }

    const result: UploadApiResponse = await uploadToCloudinary(
      file,
      file.name,
      'documents'
    );

    const response = await prisma.document.create({
      data: {
        key,
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
