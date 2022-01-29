// eslint-disable-next-line
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(req) {
  let token

  if (
    req.headers.get('Authorization') &&
    req.headers.get('Authorization').startsWith('Bearer')
  ) {
    token = req.headers.get('Authorization').split(' ')[1]
  }

  if (req.cookies.token) {
    token = req.cookies.token
  }

  // Make sure token exists
  if (!token) {
    return new Response(JSON.stringify('Bu sayfayı görme yetkiniz yok'), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  //  Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  return NextResponse.next().cookie('decoded', decoded.id)
}
