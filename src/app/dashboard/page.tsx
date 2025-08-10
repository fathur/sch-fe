'use client';

import { clearAuthToken } from '@/lib/authToken';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    clearAuthToken();
    router.push('/login');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'reports', label: 'Reports', icon: '📋' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'help', label: 'Help & Support', icon: '❓' },
  ];

  const sampleCards = [
    {
      title: 'Revenue Overview',
      body: 'Total revenue increased by 23% compared to last month. The growth is primarily driven by increased subscription renewals and new customer acquisitions.',
      footer: 'Updated 2 hours ago',
      color: 'from-blue-500 to-cyan-500',
      icon: '💰'
    },
    {
      title: 'Active Users',
      body: 'Currently tracking 12,847 active users across all platforms. User engagement has shown consistent growth with a 15% increase in daily active users.',
      footer: 'Real-time data',
      color: 'from-green-500 to-emerald-500',
      icon: '👥'
    },
    {
      title: 'System Performance',
      body: 'All systems are operating at optimal performance levels. Average response time is 45ms, well below the 100ms threshold.',
      footer: 'Status: Healthy',
      color: 'from-purple-500 to-pink-500',
      icon: '⚡'
    },
    {
      title: 'Recent Activities',
      body: '5 new projects created, 12 tasks completed, and 3 team members joined this week. Overall productivity metrics are trending upward.',
      footer: 'Last 7 days',
      color: 'from-orange-500 to-red-500',
      icon: '📝'
    },
    {
      title: 'Customer Satisfaction',
      body: 'Customer satisfaction score is 4.8/5 based on 1,247 recent reviews. Support ticket resolution time averages 2.3 hours.',
      footer: 'Score: 4.8/5',
      color: 'from-teal-500 to-blue-500',
      icon: '⭐'
    },
    {
      title: 'Upcoming Events',
      body: 'Team meeting scheduled for tomorrow at 10 AM, quarterly review on Friday, and product launch planning session next week.',
      footer: 'Next: Team Meeting',
      color: 'from-indigo-500 to-purple-500',
      icon: '📅'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Liquid Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-white/20 shadow-sm overflow-y-auto">
          <nav className="p-4">
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h2>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 text-sm font-medium">
                  + New Project
                </button>
                <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium">
                  Generate Report
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back!</h2>
            <p className="text-gray-600">Here&apos;s what&apos;s happening with your projects today.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${card.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed">{card.body}</p>
                </div>

                {/* Card Footer */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{card.footer}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Content Section */}
          <div className="mt-8 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Project "E-commerce Redesign" was updated', time: '2 minutes ago', user: 'Sarah Chen' },
                { action: 'New team member "Alex Rodriguez" joined', time: '1 hour ago', user: 'System' },
                { action: 'Report "Q4 Analytics" was generated', time: '3 hours ago', user: 'Mike Johnson' },
                { action: 'Integration with Slack was configured', time: '5 hours ago', user: 'Lisa Wang' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 flex-1">{activity.action}</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                  <span className="text-sm font-medium text-gray-600">{activity.user}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


