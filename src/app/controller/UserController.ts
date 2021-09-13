import { Request, Response } from "express";

export default {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }

        // enviar um email para ele

        return res.json(user)
    }
}