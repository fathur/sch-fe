'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import { setAuthToken } from '@/lib/authToken';
import { useRouter } from 'next/navigation';

type LoginFormData = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '', remember: false },
    mode: 'onTouched',
  });

  const [generalError, setGeneralError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setGeneralError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!baseUrl) {
        throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
      }

      const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const json = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = json?.message || 'Login failed';
        if (response.status === 400 || response.status === 401) {
          setError('password', { type: 'server', message });
        }
        throw new Error(message);
      }

      const token: string | undefined = json?.token;
      if (token) {
        setAuthToken(token, data.remember ? 'session' : 'none');
      }

      router.replace('/dashboard');
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : 'Unexpected error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* General Error */}
          {generalError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {generalError}
            </div>
          )}

          <div className="space-y-4">
            {/* Email Field */}
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
                onChange: () => clearErrors('email'),
              })}
              type="email"
              label="Email address"
              placeholder="Enter your email"
              autoComplete="email"
              error={errors.email?.message}
              leftIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              }
            />

            {/* Password Field */}
            <Input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                onChange: () => clearErrors('password'),
              })}
              type="password"
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              error={errors.password?.message}
              showPasswordToggle
            />
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...register('remember')}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Dont have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
