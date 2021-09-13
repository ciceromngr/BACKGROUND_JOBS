import Queue from 'bull'
import redisConfig from '../../config/redis'
// exe: { RegistrationMail: { key: '', handle() {} }} 
import * as job from '../jobs'

const queues = Object.values(job).map(job => ({
    bull: new Queue(job.key, { redis: redisConfig }),
    name: job.key,
    handle: job.handle
}))

export default {
    queues,
    add(name: string, data: Object) {
        //verificar qual é o job
        const queue = queues.find(queue => queue.name === name)

        return queue.bull.add(data)
    },
    process() {
        return queues.forEach(queue => {

            queue.bull.process(queue.handle)

            queue.bull.on('failed', (job, err) => {
                console.log(queue.name, job.data)
                console.log(err)
            })

        })
    }
}


// import RegistrationsMail from '../jobs/RegistrationsMail'

// const mailQueue = new Queue(RegistrationsMail.key, { redis: redisConfig }) // Primeiro parametro é o nome da fila e o segundo em qual servico ele vai rodar no caso REDIS


// export { mailQueue }