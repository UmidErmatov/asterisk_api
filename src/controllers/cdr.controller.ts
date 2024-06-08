import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const cdrClient = new PrismaClient().cDR;

export const getCDRs = async (req: Request, res: Response) => {
    try {
        const allCDRs = await cdrClient.findMany({
            take: 10
        });

        res.status(200).json({ data: allCDRs });
    } catch (e) {
        console.log(e);
    }
};