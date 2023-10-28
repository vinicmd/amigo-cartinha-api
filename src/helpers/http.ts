import type { Response } from 'express'

export const badRequest = (
  response: Response,
  error: Error
): Response<any, Record<string, any>> => {
  console.error(error)
  return response.sendStatus(400)
}

export const serverError = (response: Response): Response => {
  return response.sendStatus(500)
}

export const ok = (response: Response, data: any): Response => {
  return response.send(data).status(200)
}
