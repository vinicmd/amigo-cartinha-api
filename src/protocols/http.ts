import type { Response } from 'express'

export interface HttpResponse extends Response {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
}
