import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail', // nome da tarefa que vai rodar em segundo plano
    async handle({ data }) {

        const { user } = data

        await Mail.sendMail({
            from: "Queue test <queue@queueteste.com>",
            to: `${user.name} <${user.email}>`,
            subject: "Cadastro de Usuario",
            html: `Olá ${user.name}, Seja bem vindo ao sistema de filas :D`
        })
    },
}