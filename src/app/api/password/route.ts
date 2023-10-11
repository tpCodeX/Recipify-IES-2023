import { EmailTemplate } from "@/components/email/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/libs/prisma";
import { randomUUID } from "crypto";

interface userInfo {
  email: string;
}

const resend = new Resend("re_KTgKnKAN_4sGGckTTejo1fAFLjHhFy7zF");

export async function POST(request: Request) {
  try {
    const body: userInfo = await request.json();
    const user = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }

    const token = await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ""),
      },
    });
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: user.email,
      subject: "Hello world",
      react: EmailTemplate({ firstName: user.name, token: token.token }),
      text: "",
    });
// Modificar
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
