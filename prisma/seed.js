const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Define the data you want to seed
  const posts = [
    {
      id: 'ad69d6f8-bd27-4f4b-b5e2-857d59f3e28f',
      title: 'Introduction to Next.js',
      content: 'Next.js is a powerful React framework that allows you to build fast, server-rendered applications...',
      date: new Date('2024-08-23T10:30:00Z'),
    },
    {
      id: '4d231e2e-9a1e-4e2f-8c4f-7d4a2d57d9f5',
      title: 'Understanding Static Site Generation (SSG)',
      content: 'Static Site Generation (SSG) is one of the key features of Next.js...',
      date: new Date('2024-08-23T10:30:00Z'),
    },
    {
      id: '61f6c2a1-8d4d-4a9a-96d4-e9f9f3b8332f',
      title: 'Deploying a Next.js App with Supabase',
      content: 'In this post, we will guide you through the process of deploying a Next.js application...',
      date: new Date('2024-08-23T10:30:00Z'),
    },
  ];

  // Insert data into the database
  await prisma.post.createMany({
    data: posts,
    skipDuplicates: true, // Optional: Skips duplicate entries
  });

  console.log('Data seeded successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
