import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for a protected route
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth_token')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      // Redirect to login if no token found
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // '/dashboard/:path*',
    // Add other protected routes here
  ],
};
