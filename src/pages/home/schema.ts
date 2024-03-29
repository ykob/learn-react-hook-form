import * as z from 'zod'
import { Fruits } from '../../configs/enum'

export const schema = z.object({
  textRequired: z.string().min(1, { message: 'Required' }),
  textAsNumber: z
    .number()
    .min(1, { message: 'Input a number greater than equal to 1.' })
    .max(10, { message: 'Input a number less than equal to 10.' }),
  textAsEmail: z.string().email(),
  textAsUrl: z.string().url(),
  textAsDate: z
    .date()
    .min(new Date('1990-01-01'), { message: 'Too old.' })
    .max(new Date('2100-01-01'), { message: 'Too young.' }),
  textArray: z.array(z.string()),
  textSelectOnlyOne: z.string(),
  booleanWithCheck: z.boolean(),
  textEnum: z.nativeEnum(Fruits),
})
