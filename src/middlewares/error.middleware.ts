import { Request, Response, NextFunction } from 'express'

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error('Erro capturado:', err)

  const status = err.statusCode || 500
  const message = err.message || 'Erro interno do servidor.'

  return void res.status(status).json({ error: message })
}
