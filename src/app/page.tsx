'use client'

import { useState } from 'react'

const HARDCODED_INVENTORY = [
  {
    id: 1,
    name: 'Bananas',
    category: 'Produce',
    quantity: 45,
    originalPrice: 2.99,
    expiryDate: '2025-08-09',
    daysUntilExpiry: 2,
    condition: 'Good',
    discountPrice: 1.50,
    aiAnalysis: 'Slight browning detected. Recommend 50% discount.',
    status: 'near-expiry'
  },
  {
    id: 2,
    name: 'Organic Milk',
    category: 'Dairy',
    quantity: 12,
    originalPrice: 5.49,
    expiryDate: '2025-08-08',
    daysUntilExpiry: 1,
    condition: 'Fair',
    discountPrice: 2.75,
    aiAnalysis: 'Package integrity good. 50% discount recommended.',
    status: 'critical'
  },
  {
    id: 3,
    name: 'Sourdough Bread',
    category: 'Bakery',
    quantity: 8,
    originalPrice: 4.99,
    expiryDate: '2025-08-10',
    daysUntilExpiry: 3,
    condition: 'Good',
    discountPrice: 2.99,
    aiAnalysis: 'Fresh appearance. 40% discount for quick sale.',
    status: 'near-expiry'
  },
  {
    id: 4,
    name: 'Greek Yogurt',
    category: 'Dairy',
    quantity: 24,
    originalPrice: 3.99,
    expiryDate: '2025-08-12',
    daysUntilExpiry: 5,
    condition: 'Excellent',
    discountPrice: 3.99,
    aiAnalysis: 'No deterioration detected. No discount needed.',
    status: 'fresh'
  },
  {
    id: 5,
    name: 'Tomatoes',
    category: 'Produce',
    quantity: 32,
    originalPrice: 3.49,
    expiryDate: '2025-08-08',
    daysUntilExpiry: 1,
    condition: 'Fair',
    discountPrice: 1.75,
    aiAnalysis: 'Soft spots detected. 50% discount recommended.',
    status: 'critical'
  },
  {
    id: 6,
    name: 'Chicken Breast',
    category: 'Meat',
    quantity: 15,
    originalPrice: 12.99,
    expiryDate: '2025-08-09',
    daysUntilExpiry: 2,
    condition: 'Good',
    discountPrice: 7.99,
    aiAnalysis: 'Packaging intact. 38% discount for quick sale.',
    status: 'near-expiry'
  }
]

const HARDCODED_MARKETPLACE = [
  {
    id: 1,
    name: 'Toronto Food Bank',
    type: 'Charity',
    distance: '2.3 km',
    urgency: 'High',
    capacity: 'Large',
    preferences: ['Produce', 'Dairy', 'Meat'],
    contact: '+1 (416) 555-0123'
  },
  {
    id: 2,
    name: 'Community Kitchen',
    type: 'Charity',
    distance: '1.8 km',
    urgency: 'Medium',
    capacity: 'Medium',
    preferences: ['Produce', 'Bakery'],
    contact: '+1 (416) 555-0456'
  },
  {
    id: 3,
    name: 'Quick Sale Grocery',
    type: 'Discount Buyer',
    distance: '3.1 km',
    urgency: 'Low',
    capacity: 'Small',
    preferences: ['Dairy', 'Bakery'],
    contact: '+1 (416) 555-0789'
  }
]

const IMPACT_DATA = {
  foodSaved: 1247,
  mealsProvided: 2890,
  co2Prevented: 3.2,
  costSavings: 18500
}

export default function ShelfSmartDashboard() {
  const [activeTab, setActiveTab] = useState('inventory')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800'
      case 'near-expiry': return 'bg-yellow-100 text-yellow-800'
      case 'fresh': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const criticalItems = HARDCODED_INVENTORY.filter(item => item.status === 'critical')
  const nearExpiryItems = HARDCODED_INVENTORY.filter(item => item.status === 'near-expiry')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">ShelfSmart</h1>
              <span className="ml-2 text-sm text-gray-500">AI Food Waste Management</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Metro Fresh - Downtown Toronto</span>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                M
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['inventory', 'marketplace', 'impact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {criticalItems.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 text-red-400">⚠️</div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Urgent Action Required
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>
                        You have {criticalItems.length} items expiring within 1 day. 
                        Consider applying discounts or contacting charity partners immediately.
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="-mx-2 -my-1.5 flex">
                        <button
                          type="button"
                          className="bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100"
                        >
                          Apply Auto-Discounts
                        </button>
                        <button
                          type="button"
                          className="ml-3 bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100"
                        >
                          Contact Partners
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Items</h3>
                <p className="text-3xl font-bold text-red-600">{criticalItems.length}</p>
                <p className="text-sm text-red-600">Expiring in 1 day</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Near Expiry</h3>
                <p className="text-3xl font-bold text-yellow-600">{nearExpiryItems.length}</p>
                <p className="text-sm text-yellow-600">Expiring in 2-3 days</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Total Items</h3>
                <p className="text-3xl font-bold text-green-600">{HARDCODED_INVENTORY.length}</p>
                <p className="text-sm text-green-600">In inventory</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Inventory Status</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Until Expiry</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AI Analysis</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {HARDCODED_INVENTORY.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.category}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.quantity} units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.daysUntilExpiry} days
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {item.status.replace('-', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex flex-col">
                            <span className={item.discountPrice < item.originalPrice ? 'line-through text-gray-500' : 'text-gray-900'}>
                              ${item.originalPrice}
                            </span>
                            {item.discountPrice < item.originalPrice && (
                              <span className="text-red-600 font-semibold">${item.discountPrice}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                          {item.aiAnalysis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Discount Marketplace</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HARDCODED_INVENTORY.filter(item => item.status === 'critical' || item.status === 'near-expiry').map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category} • {item.quantity} units</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(item.status)}`}>
                        {item.daysUntilExpiry}d left
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-red-600">${item.discountPrice}</span>
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        <span className="text-sm text-green-600">
                          {Math.round((1 - item.discountPrice / item.originalPrice) * 100)}% off
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                      Add to Marketplace
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Partner Network</h2>
              <div className="space-y-4">
                {HARDCODED_MARKETPLACE.map((partner) => (
                  <div key={partner.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                        <p className="text-sm text-gray-600">{partner.type} • {partner.distance} away</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Accepts: {partner.preferences.join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs rounded ${
                            partner.urgency === 'High' ? 'bg-red-100 text-red-800' :
                            partner.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {partner.urgency} Priority
                          </span>
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            {partner.capacity} Capacity
                          </span>
                        </div>
                        <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                          Contact Partner
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                      <span className="text-green-600 font-semibold">🥘</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Food Saved</p>
                    <p className="text-2xl font-semibold text-gray-900">{IMPACT_DATA.foodSaved} kg</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">👥</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Meals Provided</p>
                    <p className="text-2xl font-semibold text-gray-900">{IMPACT_DATA.mealsProvided.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                      <span className="text-green-600 font-semibold">🌱</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">CO₂ Prevented</p>
                    <p className="text-2xl font-semibold text-gray-900">{IMPACT_DATA.co2Prevented}t</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                      <span className="text-yellow-600 font-semibold">💰</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Cost Savings</p>
                    <p className="text-2xl font-semibold text-gray-900">${IMPACT_DATA.costSavings.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Impact Trend</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Food Waste Reduction</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '73%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">73%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Community Partnerships</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Revenue Recovery</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">67%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">15 minutes ago:</span>
                  <span>Successfully redistributed 25kg of produce to Toronto Food Bank</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">2 hours ago:</span>
                  <span>Applied 40% discount to 8 loaves of sourdough bread</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">4 hours ago:</span>
                  <span>AI detected early spoilage signs in 12 units of organic milk</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Yesterday:</span>
                  <span>Prevented 78kg of food waste through smart redistribution</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
