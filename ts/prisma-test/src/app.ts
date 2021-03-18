import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

interface User {
  name: string;
  email: string;
  title: string;
  bio: string;
}

async function createUser({ name, email, title, bio }: User) {
  await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: { title },
      },
      profile: {
        create: { bio },
      },
    }
  })
}

async function main() {
  const alice = { name: 'Alice', email: 'alice@prisma.io', title: 'Hello World', bio: 'I like turtles' };
  await createUser(alice);

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch(e => { throw e })
  .finally(async () => await prisma.$disconnect());