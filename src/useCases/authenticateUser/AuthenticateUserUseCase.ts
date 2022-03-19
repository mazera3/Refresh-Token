import { client } from "../../prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
  username: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ username, password }: IRequest) {
    //   Verificar se usuario existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });
    if (!userAlreadyExists) {
      throw new Error("User or password incorrect!");
    }
    //  verificar se a senha esta correta
    const passwordMath = await compare(password, userAlreadyExists.password);
    if (!passwordMath) {
      throw new Error("User or password incorrect!");
    }

    // gerar token do usuario
    const token = sign({}, process.env.KEY_UUID, {
      subject: userAlreadyExists.id,
      expiresIn: "20s", // 20 seg
    });
    return { token };
  }
}

export { AuthenticateUserUseCase };
// parou em 34:00 minutos
