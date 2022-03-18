import { hash } from "bcryptjs";

import { client } from "../../prisma/client";

interface IUserRequest {
  name: string;
  username: string;
  password: string;
  createdAt: string;
}
class CreateUserUseCase {
  async execute({ name, username, password, createdAt }: IUserRequest) {
    //   Verificar se usuário existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    // Cadastra o usuário

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        password: passwordHash,
        createdAt,
      },
    });
    return user;
  }
}

export { CreateUserUseCase };
