# Usage instructions

This repository contains a simple [NestJS application](https://nestjs.com/) used
to investigate the problem described [in this link](https://stackoverflow.com/questions/61764522/typeorm-repositorynotfounderror-when-searching-for-entities-using-the-class-in-j).
It should not be used in production.

Install dependencies:

```bash
yarn install
```

Initialize the database:

```bash
docker-compose up
```

Compile the project:

```bash
yarn dev:build
```

Start the application:

```bash
yarn dev:start
```

Or run the failing test:

```bash
yarn jest src/users/entities/user.entity.spec.ts
```
