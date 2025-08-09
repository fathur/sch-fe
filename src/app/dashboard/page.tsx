'use client';

import { clearAuthToken } from '@/lib/authToken';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    clearAuthToken();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome to your Dashboard!</h2>
        <p className="mt-2 text-gray-600">You have successfully logged in.</p>
        <p className="text-sm text-gray-500">
          This page is protected and only accessible after successful authentication.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}


