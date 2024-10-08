import { NextResponse } from 'next/server';
import { UploadApiResponse } from 'cloudinary';
import prisma from '@/lib/prisma';
import { replaceExtensionWithWebp } from '@/utils/helpers';
import { uploadToCloudinary } from '@/services/cloudinaryService';

export async function GET() {
  try {
    const documents = await prisma.event.findMany();
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const values = await request.formData();

    const title = values.get('title') as string | null;
    const text = values.get('text') as string | null;
    const image = values.get('image') as File | null;

    if (!title || !text || !image) {
      return NextResponse.json(
        { message: 'Title, text and image are required.' },
        { status: 400 }
      );
    }

    const result: UploadApiResponse = await uploadToCloudinary(
      image,
      image.name,
      'documents'
    );

    const response = await prisma.event.create({
      data: {
        title,
        text,
        imageUrl: replaceExtensionWithWebp(result.secure_url),
        imageId: result.public_id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
