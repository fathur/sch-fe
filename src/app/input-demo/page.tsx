'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';

export default function InputDemoPage() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    search: '',
    url: '',
    tel: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Input Component Demo</h1>
          <p className="text-gray-600 mb-8">
            Demonstrating the versatility of our generic Input component with different types, 
            sizes, variants, and features.
          </p>

          <div className="space-y-8">
            {/* Basic Inputs */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Input Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="text"
                  type="text"
                  label="Text Input"
                  placeholder="Enter some text"
                  value={formData.text}
                  onChange={handleInputChange}
                  helperText="This is a regular text input"
                />

                <Input
                  name="email"
                  type="email"
                  label="Email Input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  }
                />

                <Input
                  name="password"
                  type="password"
                  label="Password Input"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  showPasswordToggle={true}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  }
                />

                <Input
                  name="number"
                  type="number"
                  label="Number Input"
                  placeholder="Enter a number"
                  value={formData.number}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                />
              </div>
            </section>

            {/* Special Inputs */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Special Input Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="search"
                  type="search"
                  label="Search Input"
                  placeholder="Search for something..."
                  value={formData.search}
                  onChange={handleInputChange}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />

                <Input
                  name="url"
                  type="url"
                  label="URL Input"
                  placeholder="https://example.com"
                  value={formData.url}
                  onChange={handleInputChange}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  }
                />

                <Input
                  name="tel"
                  type="tel"
                  label="Phone Input"
                  placeholder="+1 (555) 123-4567"
                  value={formData.tel}
                  onChange={handleInputChange}
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              </div>
            </section>

            {/* Different Sizes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Input Sizes</h2>
              <div className="space-y-4">
                <Input
                  type="text"
                  label="Small Size"
                  placeholder="Small input"
                  size="sm"
                />
                <Input
                  type="text"
                  label="Medium Size (Default)"
                  placeholder="Medium input"
                  size="md"
                />
                <Input
                  type="text"
                  label="Large Size"
                  placeholder="Large input"
                  size="lg"
                />
              </div>
            </section>

            {/* Different Variants */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Input Variants</h2>
              <div className="space-y-4">
                <Input
                  type="text"
                  label="Default Variant"
                  placeholder="Default style"
                  variant="default"
                />
                <Input
                  type="text"
                  label="Outlined Variant"
                  placeholder="Outlined style"
                  variant="outlined"
                />
                <Input
                  type="text"
                  label="Filled Variant"
                  placeholder="Filled style"
                  variant="filled"
                />
              </div>
            </section>

            {/* Error States */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Error States</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  label="Email with Error"
                  placeholder="invalid-email"
                  error="Please enter a valid email address"
                />
                <Input
                  type="password"
                  label="Password with Error"
                  placeholder="123"
                  showPasswordToggle={true}
                  error="Password must be at least 8 characters"
                />
              </div>
            </section>

            {/* Disabled State */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Disabled State</h2>
              <Input
                type="text"
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
                value="Cannot edit this"
              />
            </section>
          </div>

          {/* Back to Login */}
          <div className="mt-12 text-center">
            <a
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              ← Back to Login Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
