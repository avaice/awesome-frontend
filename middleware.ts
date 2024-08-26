import { next } from '@vercel/edge'

export const config = {
  matches: '/',
}

export default function middleware(req: Request) {
  // ここにサーバーサイドの挙動を記述できます

  return next()
}
