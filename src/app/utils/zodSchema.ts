import {z} from 'zod'

export const contactSchema = z.object({
  firstName: z.string().min(1, 'Preencha com seu nome'),
  lastName: z.string().min(1, 'Preencha com seu sobrenome'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(
    /^\(?\d{2}\)? ?9?\d{4}-?\d{4}$/,
    "Number de telefone inválido"
  ),
  message: z.string().min(1, 'Preencha com uma mensagem'),
})
