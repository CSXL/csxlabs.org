import type { NextApiRequest, NextApiResponse } from 'next'

type MOTD = {
    id: number
    content: string
    date: Date
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MOTD[]>
) {
    const eres = await fetch('http://localhost:8000/api/motds')
    const motds: MOTD[] = await eres.json()
    res.status(200).json(motds)
}
