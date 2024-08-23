import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const posts = await prisma.post.findMany();
            
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({error: 'Failed to fetch posts'});
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end('Method not allowed');
    }
}