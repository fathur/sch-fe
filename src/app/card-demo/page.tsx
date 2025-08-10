'use client';

import Card from '@/components/ui/Card';

export default function CardDemoPage() {
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

  const colorVariants = [
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-teal-500 to-blue-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-yellow-500 to-orange-500',
    'from-gray-500 to-slate-500',
    'from-cyan-500 to-blue-500',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Card Component Demo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the variations, sizes, and styles of our reusable Card component. 
            Each card demonstrates different props and configurations.
          </p>
        </div>

        {/* Default Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Default Cards (All Variations)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                body={card.body}
                footer={card.footer}
                color={card.color}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        {/* Size Variations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Small Card"
              body="This is a small-sized card with compact spacing and smaller text. Perfect for displaying concise information in tight spaces."
              footer="Small footer"
              color="from-blue-500 to-cyan-500"
              icon="📱"
              size="sm"
            />
            <Card
              title="Medium Card"
              body="This is a medium-sized card with balanced spacing and readable text. This is the default size that works well in most layouts."
              footer="Medium footer"
              color="from-green-500 to-emerald-500"
              icon="📊"
              size="md"
            />
            <Card
              title="Large Card"
              body="This is a large-sized card with generous spacing and prominent text. Ideal for highlighting important information or detailed content."
              footer="Large footer"
              color="from-purple-500 to-pink-500"
              icon="🎯"
              size="lg"
            />
          </div>
        </section>

        {/* Variant Styles Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Variant Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Default Style"
              body="This is the default glassmorphism style with backdrop blur and semi-transparent background."
              footer="Default variant"
              color="from-blue-500 to-cyan-500"
              icon="✨"
              variant="default"
            />
            <Card
              title="Outlined Style"
              body="This variant has a clean outlined appearance with subtle borders and minimal shadows."
              footer="Outlined variant"
              color="from-green-500 to-emerald-500"
              icon="🔲"
              variant="outlined"
            />
            <Card
              title="Elevated Style"
              body="This variant features prominent shadows and no borders for a floating card effect."
              footer="Elevated variant"
              color="from-purple-500 to-pink-500"
              icon="☁️"
              variant="elevated"
            />
            <Card
              title="Minimal Style"
              body="This variant has a subtle background with minimal styling for a clean, understated look."
              footer="Minimal variant"
              color="from-orange-500 to-red-500"
              icon="🎨"
              variant="minimal"
            />
          </div>
        </section>

        {/* Color Variations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Color Variations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colorVariants.map((color, index) => (
              <Card
                key={index}
                title={`Color ${index + 1}`}
                body="Beautiful gradient colors for different use cases and themes."
                footer="Color variant"
                color={color}
                icon="🎨"
                size="sm"
                showFooter={false}
              />
            ))}
          </div>
        </section>

        {/* Interactive Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Interactive Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Clickable Card"
              body="This card is clickable and will show hover effects. Perfect for navigation or expanding content."
              footer="Click me!"
              color="from-indigo-500 to-purple-500"
              icon="🖱️"
              onClick={() => alert('Card clicked!')}
            />
            <Card
              title="Custom Content"
              body="This card demonstrates custom content instead of the default body text."
              footer="Custom footer"
              color="from-teal-500 to-blue-500"
              icon="🔧"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Feature 1: Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Feature 2: Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Feature 3: Inactive</span>
                </div>
              </div>
            </Card>
            <Card
              title="No Footer"
              body="This card demonstrates the no-footer option, useful for cards that don't need additional actions or metadata."
              color="from-pink-500 to-rose-500"
              icon="🚫"
              showFooter={false}
            />
          </div>
        </section>

        {/* No Icon Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cards Without Icons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCards.slice(0, 3).map((card, index) => (
              <Card
                key={index}
                title={card.title}
                body={card.body}
                footer={card.footer}
                color={card.color}
                showIcon={false}
              />
            ))}
          </div>
        </section>

        {/* Usage Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Usage Examples</h2>
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Usage</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import Card from '@/components/ui/Card';

<Card
  title="Card Title"
  body="Card content goes here"
  footer="Optional footer"
  color="from-blue-500 to-cyan-500"
  icon="💰"
/>`}
            </pre>

            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Advanced Usage</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<Card
  title="Custom Card"
  body="Default body text"
  variant="elevated"
  size="lg"
  showFooter={false}
  onClick={() => handleClick()}
>
  <div className="custom-content">
    {/* Your custom content here */}
  </div>
</Card>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
