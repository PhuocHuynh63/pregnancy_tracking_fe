import { z } from 'zod'

const configShema = z.object({
    VITE_API_DEV_URL: z.string(),
})

const configProject = configShema.safeParse({
    VITE_API_DEV_URL: import.meta.env.VITE_API_DEV_URL,
})

if (!configProject.success) {
    throw new Error('The value of the environment variable is not valid')
}

const envConfig = configProject.data
export default envConfig