import { Request, Response } from "express";
import Queue from "../lib/Queue";


export default {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }
        /* 
            Filas Altomatizadas primeiro parametro nome da key da fila que quer processar 
            segundo parametro um objeto no nosso caso um objeto de users

            la dentro de lib queue
            exe: await Queue.add('NomeDaQueue', { objeto } // function() {} )
        */
        await Queue.add('RegistrationMail', { user })

        return res.json(user)
    }
}