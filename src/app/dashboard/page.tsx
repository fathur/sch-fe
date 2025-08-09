'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken, clearAuthToken } from '@/lib/authToken';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setIsAuthorized(false);
      router.replace('/login');
      return;
    }
    setIsAuthorized(true);
  }, [router]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="flex items-center gap-3 text-gray-600">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Checking session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Redirecting
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <button
            onClick={() => {
              clearAuthToken();
              router.replace('/login');
            }}
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
          >
            Log out
          </button>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">Welcome</h2>
            <p className="mt-2 text-xl font-semibold text-gray-900">Youre logged in</p>
            <p className="mt-1 text-gray-600">This page is protected and only visible when authenticated.</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-blue-600">
              {/* <li><a className="hover:underline" href="/">Home</a></li>
              <li><a className="hover:underline" href="/login">Login</a></li> */}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-sm font-medium text-gray-500">Next Steps</h2>
            <p className="mt-2 text-gray-700">Replace this with your app content and fetch data from your backend using the stored token.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


