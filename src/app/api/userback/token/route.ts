import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { hash } from "bcrypt";

interface userInfo {
  password: string;
  repeatPassword: string;
  tokenUsuario: string;
}

export async function POST(request: Request) {
  const body: userInfo = await request.json();
    console.log("token usuario"+body.tokenUsuario)
  // Hacer logica de contraseñas sin son iguales

  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: {
      token: body.tokenUsuario,
      createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 1) },
      resetAt: null,
    },
  });

  console.log(passwordResetToken);

  if (!passwordResetToken) {
    return NextResponse.json(
      { user: null, message: "Error al cambiar la contraseña" },
      { status: 400 }
    );
  }

  console.log("password" + body.password);
  const encrypted = await hash(body.password, 12);

  console.log("encriptado" + encrypted);
  const updateUser = prisma.user.update({
    where: { id: passwordResetToken.userId },
    data: {
      password: encrypted,
    },
  });

  const updateToken = prisma.passwordResetToken.update({
    where: {
      id: passwordResetToken.id,
    },
    data: {
      resetAt: new Date(),
    },
  });

  try {
    await prisma.$transaction([updateUser, updateToken]);
  } catch (err) {
    console.error("error");
    return NextResponse.json(
      { user: null, message: "Error al cambiar la contraseña 2" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { user: updateUser, message: "Usuario modificado con exito" },
    { status: 201 }
  );
  //   return NextResponse.json(updateUser);
}
