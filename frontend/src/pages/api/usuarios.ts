import type { NextApiRequest, NextApiResponse } from 'next'; 
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient(); 

export default async function handler( 
 req: NextApiRequest, 
 res: NextApiResponse 
) { 
 if (req.method === 'GET') { 
 const usuarios = await prisma.usuario.findMany({ 
 orderBy: { 
 creadoEn: 'desc', 
 }, 
 }); 

 return res.status(200).json(usuarios); 
 } 

 res.setHeader('Allow', ['GET']); 

 return res.status(405).json({ 
 message: 'Método no permitido', 
 }); 
}