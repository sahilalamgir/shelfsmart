'use client'

const HARDCODED_INVENTORY = [
  {
    id: 1,
    name: 'Organic Bananas (50% Off Bundle)',
    category: 'Produce',
    quantity: 25,
    originalPrice: 2.99,
    discountPrice: 1.50,
    daysUntilExpiry: 2,
    hoursUntilExpiry: 48,
    status: 'near-expiry',
    image: '🍌',
    featured: true
  },
  {
    id: 2,
    name: 'Organic Milk 1L',
    category: 'Dairy',
    quantity: 12,
    originalPrice: 5.49,
    discountPrice: 2.75,
    daysUntilExpiry: 1,
    status: 'critical',
    image: '🥛'
  },
  {
    id: 3,
    name: 'Artisan Sourdough',
    category: 'Bakery',
    quantity: 8,
    originalPrice: 4.99,
    discountPrice: 2.99,
    daysUntilExpiry: 3,
    status: 'near-expiry',
    image: '🍞'
  },
  {
    id: 5,
    name: 'Roma Tomatoes',
    category: 'Produce',
    quantity: 32,
    originalPrice: 3.49,
    discountPrice: 1.75,
    daysUntilExpiry: 1,
    status: 'critical',
    image: '🍅'
  },
  {
    id: 6,
    name: 'Free-Range Chicken',
    category: 'Meat',
    quantity: 15,
    originalPrice: 12.99,
    discountPrice: 7.99,
    daysUntilExpiry: 2,
    status: 'near-expiry',
    image: '🍗'
  }
]

const HARDCODED_MARKETPLACE = [
  {
    id: 1,
    name: 'Toronto Food Bank',
    type: 'Food Bank',
    distance: '2.3 km',
    urgency: 'High',
    capacity: 'Large',
    preferences: ['Produce', 'Dairy', 'Meat'],
    contact: '+1 (416) 555-0123',
    rating: 4.9,
    totalPartnerships: 156,
    icon: '🏢'
  },
  {
    id: 2,
    name: 'Community Kitchen',
    type: 'Community Kitchen',
    distance: '1.8 km',
    urgency: 'Medium',
    capacity: 'Medium',
    preferences: ['Produce', 'Bakery'],
    contact: '+1 (416) 555-0456',
    rating: 4.7,
    totalPartnerships: 89,
    icon: '🍽️'
  },
  {
    id: 3,
    name: 'QuickSale Grocery',
    type: 'Discount Retailer',
    distance: '3.1 km',
    urgency: 'Low',
    capacity: 'Small',
    preferences: ['Dairy', 'Bakery'],
    contact: '+1 (416) 555-0789',
    rating: 4.5,
    totalPartnerships: 45,
    icon: '🛒'
  },
  {
    id: 4,
    name: 'Fresh Market Hub',
    type: 'Wholesale Buyer',
    distance: '4.2 km',
    urgency: 'Medium',
    capacity: 'Large',
    preferences: ['Produce', 'Meat'],
    contact: '+1 (416) 555-0321',
    rating: 4.8,
    totalPartnerships: 203,
    icon: '🏪'
  }
]

export default function Marketplace() {
  const discountItems = HARDCODED_INVENTORY.filter(item => item.status === 'critical' || item.status === 'near-expiry')

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'Low': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'critical' ? 'border-red-300 bg-red-50' : 'border-amber-300 bg-amber-50'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Smart Marketplace</h1>
        <p className="text-slate-600">Connect surplus inventory with community partners and discount buyers</p>
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600">Live Matching Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">{discountItems.length} items ready for sale</span>
          </div>
        </div>
      </div>

      {/* Discount Items */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
        <div className="p-6 border-b border-slate-200/50">
          <h2 className="text-xl font-bold text-slate-800">Available for Discount Sale</h2>
          <p className="text-slate-600 mt-1">Items priced to move quickly while maximizing revenue</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {discountItems.map((item) => (
            <div key={item.id} className={`bg-white rounded-2xl p-6 border-2 shadow-sm hover:shadow-md transition-all duration-200 ${getStatusColor(item.status)} ${(item as any).featured ? 'ring-2 ring-emerald-300 ring-offset-2' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.category} • {item.quantity} units</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">
                    {(item as any).hoursUntilExpiry ? `${(item as any).hoursUntilExpiry}h left` : `${item.daysUntilExpiry}d left`}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full mt-1 ${item.status === 'critical' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                    {item.status === 'critical' ? 'URGENT' : 'SOON'}
                  </div>
                  {(item as any).featured && (
                    <div className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full mt-1">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Smart Pricing</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      {Math.round((1 - item.discountPrice / item.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-green-600">${item.discountPrice}</span>
                    <span className="text-lg text-slate-400 line-through">${item.originalPrice}</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-2">
                    Revenue: ${(item.discountPrice * item.quantity).toFixed(2)}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
                  List in Marketplace
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Network */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
        <div className="p-6 border-b border-slate-200/50">
          <h2 className="text-xl font-bold text-slate-800">Partner Network</h2>
          <p className="text-slate-600 mt-1">Trusted partners ready to purchase or receive donations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {HARDCODED_MARKETPLACE.map((partner) => (
            <div key={partner.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center text-2xl border border-blue-100">
                    {partner.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">{partner.name}</h3>
                    <p className="text-slate-600">{partner.type}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-slate-500">📍 {partner.distance}</span>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-sm">⭐</span>
                        <span className="text-sm text-slate-600">{partner.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border mb-2 ${getUrgencyColor(partner.urgency)}`}>
                    {partner.urgency} Priority
                  </div>
                  <div className="text-xs text-slate-500">{partner.totalPartnerships} partnerships</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-slate-600">Accepts: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {partner.preferences.map((pref) => (
                      <span key={pref} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs">
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">Capacity:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      partner.capacity === 'Large' ? 'bg-green-100 text-green-700' :
                      partner.capacity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {partner.capacity}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2.5 px-4 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-200">
                    Contact Partner
                  </button>
                  <button className="px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-medium hover:bg-slate-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Match Suggestions */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">AI Match Suggestions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-purple-100">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-slate-800">Optimal Match Found</h3>
                <p className="text-sm text-slate-600">Roma Tomatoes → Toronto Food Bank</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              High urgency partner within 2.3km accepts produce. Perfect match for critical items.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Execute Match
            </button>
          </div>

          <div className="bg-white rounded-xl p-4 border border-purple-100">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl">💰</span>
              <div>
                <h3 className="font-semibold text-slate-800">Revenue Opportunity</h3>
                <p className="text-sm text-slate-600">Bakery Items → QuickSale Grocery</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Discount retailer seeking bakery products. Potential revenue: $23.92
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Initiate Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}