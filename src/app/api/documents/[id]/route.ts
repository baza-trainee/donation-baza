import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from '@/utils/cloudinaryService';
import { NextResponse } from 'next/server';
import { UploadApiResponse } from 'cloudinary';
import prisma from '@/lib/prisma';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const values = await request.formData();
    const file = values.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { message: 'File is required.' },
        { status: 400 }
      );
    }

    const document = await prisma.document.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!document) {
      return NextResponse.json(
        { message: 'Document with this Id not found' },
        { status: 404 }
      );
    }

    await deleteFromCloudinary(document.publicId);

    const result: UploadApiResponse = await uploadToCloudinary(
      file,
      file.name,
      'documents'
    );

    const response = await prisma.document.update({
      where: {
        id: params.id,
      },
      data: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const document = await prisma.document.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!document) {
      return NextResponse.json(
        { message: 'Document with this Id not found' },
        { status: 404 }
      );
    }

    await deleteFromCloudinary(document.publicId);

    const response = await prisma.document.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
