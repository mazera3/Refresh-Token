# Tecnologias Utilizadas
- insomnia
- vscode
- nodejs
- bibliotecas: express, prisma, jwt
- [Aula](https://youtu.be/RaweREhpBX8)
- [GITHUB] (git@github.com:mazera3/Refresh-Token.git)
- [Prisma](https://www.prisma.io/)

# Iniciar Projeto
- yarn init -y (cria o pacote package.json)
- Instalar express e typescript:
  - `yarn add express`
  - `yarn add typescript @types/express @types/node ts-node-dev -D`
  - Criar tsconfig.json: `yarn tsc --init`
- Criar pasta/arquivo pelo terminal: `mkdir src && touch src/server.ts` 
  - Criar gitignore pelo terminal: `touch .gitignore`
  - Adicionar arquivos e pastas pelo terminal: `echo -e "node_modules/\n.env" >> .gitignore`
  - Rodar yarn dev (rodar app)

# Prisma
- Instalar: `yarn add prisma -D && yarn add @prisma/client`
- iniciar: `yarn prisma init`
- Criar banco de dados mysql: `refresh_token`
- Editar schema.prisma
- Rodar: yarn prisma migrate dev --name create_users
- Criar pasta/arquivo: src/prisma/client.ts
- Criar pasta/arquivo: src/useCases/AuthenticateUser/AuthenticateUserUseCase.ts
- Criar pasta/arquivo: src/useCases/AuthenticateUser/AuthenticateUserController.ts

# Bcryptjs
- yarn add bcryptjs & yarn add @types/bcryptjs -D

# Tratamento de excesão
- yarn add express-async-errors

# Autenticação e Token
- [JSON Web Tokens](https://jwt.io/)
- Instalar: yarn add jsonwebtoken [jwt](https://www.npmjs.com/package/jsonwebtoken)
- Tipagem: yarn add @types/jsonwebtoken -D
- Gerar Key: [Online UUID Generator](https://www.uuidgenerator.net/)
- Criar arquivo: src/useCases/authenticateUser/AuthenticateUserController.ts
- Testar com insomnia

# Testar o token
- Criar o middlewares: src/middlewares/ensureAuthenticated.ts

# Criar Refresh Token
- Acrescentar no schema.prisma nova model RefreshToken
- Rodar: yarn prisma migrate dev --name create_refresh_token
- Criar pasta/arquivo: src/provider/GererateRefreshToken.ts
- Instalar biblioteca dayjs: yarn add dayjs
- Testar no insomnia.