import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Simple validation
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newContact = await Contact.create(body);

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error creating contact' }, { status: 500 });
  }
}
