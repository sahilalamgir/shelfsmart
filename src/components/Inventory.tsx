'use client'

import { useState } from 'react'

interface InventoryItem {
  id: number
  name: string
  category: string
  quantity: number
  originalPrice: number
  expiryDate: string
  daysUntilExpiry: number
  hoursUntilExpiry?: number
  condition: string
  discountPrice: number
  aiAnalysis: string
  status: 'critical' | 'near-expiry' | 'fresh'
  image: string
  cvAnalyzed?: boolean
  marketplaceReady?: boolean
  foodBankNotified?: boolean
  pickupScheduled?: string
  donationValue?: string
}

const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 1,
    name: 'Organic Bananas (Bella)',
    category: 'Produce',
    quantity: 30,
    originalPrice: 2.99,
    expiryDate: '2025-08-07',
    daysUntilExpiry: 0.5,
    hoursUntilExpiry: 12,
    condition: 'Fair',
    discountPrice: 1.50,
    aiAnalysis: 'Advanced browning detected. 12 hours until overripe. Auto-notified Toronto Food Bank and Community Kitchen for pickup.',
    status: 'critical',
    image: '🍌',
    foodBankNotified: false,
    pickupScheduled: '4:00 PM today',
    donationValue: '$89.70'
  },
  {
    id: 3,
    name: 'Organic Milk 1L',
    category: 'Dairy',
    quantity: 12,
    originalPrice: 5.49,
    expiryDate: '2025-08-08',
    daysUntilExpiry: 1,
    condition: 'Fair',
    discountPrice: 2.75,
    aiAnalysis: 'Package integrity excellent. Temperature logs normal. Apply 50% discount for immediate sale.',
    status: 'critical',
    image: '🥛'
  },
  {
    id: 4,
    name: 'Artisan Sourdough',
    category: 'Bakery',
    quantity: 8,
    originalPrice: 4.99,
    expiryDate: '2025-08-10',
    daysUntilExpiry: 3,
    condition: 'Good',
    discountPrice: 2.99,
    aiAnalysis: 'Fresh appearance maintained. Crust integrity good. 40% discount recommended for bulk sale.',
    status: 'near-expiry',
    image: '🍞'
  },
  {
    id: 5,
    name: 'Greek Yogurt 500g',
    category: 'Dairy',
    quantity: 24,
    originalPrice: 3.99,
    expiryDate: '2025-08-12',
    daysUntilExpiry: 5,
    condition: 'Excellent',
    discountPrice: 3.99,
    aiAnalysis: 'No deterioration detected. Optimal storage conditions maintained. No discount required.',
    status: 'fresh',
    image: '🥣'
  },
  {
    id: 6,
    name: 'Roma Tomatoes',
    category: 'Produce',
    quantity: 32,
    originalPrice: 3.49,
    expiryDate: '2025-08-08',
    daysUntilExpiry: 1,
    condition: 'Fair',
    discountPrice: 1.75,
    aiAnalysis: 'Soft spots detected on 25% of items. Color analysis shows advanced ripening. Immediate 50% discount needed.',
    status: 'critical',
    image: '🍅'
  },
  {
    id: 7,
    name: 'Free-Range Chicken',
    category: 'Meat',
    quantity: 15,
    originalPrice: 12.99,
    expiryDate: '2025-08-09',
    daysUntilExpiry: 2,
    condition: 'Good',
    discountPrice: 7.99,
    aiAnalysis: 'Packaging sealed properly. Cold chain maintained. 38% discount optimal for quick turnover.',
    status: 'near-expiry',
    image: '🍗'
  }
]

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY)
  const [uploading, setUploading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [notifyingFoodBank, setNotifyingFoodBank] = useState<number | null>(null)
  const [applyingDiscount, setApplyingDiscount] = useState<number | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    const reader = new FileReader()
    
    reader.onload = () => {
      setUploading(false)
      setAnalyzing(true)
      
      // Simulate CV analysis (8 seconds)
      setTimeout(() => {
        const newBanana: InventoryItem = {
          id: Date.now(),
          name: 'Organic Bananas (CV Analyzed)',
          category: 'Produce',
          quantity: 20,
          originalPrice: 2.99,
          expiryDate: '2025-08-09',
          daysUntilExpiry: 2,
          hoursUntilExpiry: 48,
          condition: 'Good',
          discountPrice: 2.99,
          aiAnalysis: 'CV detected slight browning on 18% of bananas. Quality assessment: Good. Estimated 48 hours until overripe. Recommend 50% discount for immediate sale.',
          status: 'near-expiry' as const,
          image: '🍌',
          cvAnalyzed: true,
          marketplaceReady: true,
          foodBankNotified: false
        }
        
        setInventory(prev => [newBanana, ...prev])
        setAnalyzing(false)
      }, 8000)
    }
    
    reader.readAsDataURL(file)
  }

  const handleNotifyFoodBank = (itemId: number) => {
    setNotifyingFoodBank(itemId)
    
    // Simulate food bank notification process (8 seconds)
    setTimeout(() => {
      setInventory(prev => prev.map(item => 
        item.id === itemId 
          ? { ...item, foodBankNotified: true }
          : item
      ))
      setNotifyingFoodBank(null)
    }, 8000)
  }

  const handleApplyDiscount = (itemId: number) => {
    setApplyingDiscount(itemId)
    
    // Simulate applying discount (3 seconds)
    setTimeout(() => {
      setInventory(prev => prev.map(item => 
        item.id === itemId 
          ? { ...item, discountPrice: 1.50 }
          : item
      ))
      setApplyingDiscount(null)
    }, 3000)
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'near-expiry': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'fresh': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-gradient-to-r from-red-500 to-red-600'
      case 'near-expiry': return 'bg-gradient-to-r from-amber-500 to-amber-600'
      case 'fresh': return 'bg-gradient-to-r from-emerald-500 to-emerald-600'
      default: return 'bg-gradient-to-r from-slate-500 to-slate-600'
    }
  }

  const criticalItems = inventory.filter(item => item.status === 'critical')
  const nearExpiryItems = inventory.filter(item => item.status === 'near-expiry')

  return (
    <div className="space-y-8">
      {/* Alert Banner */}
      {criticalItems.length > 0 && (
        <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-800 mb-2">
                Immediate Action Required
              </h3>
              <p className="text-red-700 mb-4">
                {criticalItems.length} items are expiring within 24 hours. AI recommends immediate discount pricing 
                or partner network activation to prevent waste and recover value.
              </p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
                  Apply Smart Discounts
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-xl font-medium hover:bg-red-200 transition-colors">
                  Contact Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-red-700 mb-1">Critical Items</h3>
              <p className="text-3xl font-bold text-red-600">{criticalItems.length}</p>
              <p className="text-sm text-red-600">Expiring today</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🚨</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-amber-700 mb-1">Near Expiry</h3>
              <p className="text-3xl font-bold text-amber-600">{nearExpiryItems.length}</p>
              <p className="text-sm text-amber-600">2-3 days remaining</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-emerald-700 mb-1">Total Monitored</h3>
              <p className="text-3xl font-bold text-emerald-600">{inventory.length}</p>
              <p className="text-sm text-emerald-600">Product categories</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📷</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Add New Items with CV Analysis</h2>
            <p className="text-slate-600">Upload food images for instant quality assessment and expiry prediction</p>
          </div>

          {!uploading && !analyzing && (
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 hover:border-blue-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-xl">📤</span>
                </div>
                <p className="text-sm font-medium text-slate-700 mb-1">Drop banana image here or click to upload</p>
                <p className="text-xs text-slate-500">Demo: Will detect 48h expiry automatically</p>
              </label>
            </div>
          )}

          {uploading && (
            <div className="text-center py-8">
              <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="font-medium text-slate-700">Uploading image...</p>
            </div>
          )}

          {analyzing && (
            <div className="text-center py-8">
              <div className="animate-spin w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="font-medium text-slate-700">Analyzing with CV model...</p>
              <p className="text-sm text-slate-600">Detecting freshness, quality & expiry...</p>
            </div>
          )}
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50">
          <h2 className="text-xl font-bold text-slate-800">Smart Inventory Management</h2>
          <p className="text-slate-600 mt-1">AI-powered monitoring and optimization</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {inventory.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
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
                <div className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(item.status)}`}>
                  {(item as any).hoursUntilExpiry ? `${(item as any).hoursUntilExpiry}h left` : `${item.daysUntilExpiry}d left`}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Pricing</span>
                  <div className="text-right">
                    {item.discountPrice < item.originalPrice ? (
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-red-600">${item.discountPrice}</div>
                        <div className="text-sm text-slate-400 line-through">${item.originalPrice}</div>
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-slate-800">${item.originalPrice}</div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-slate-600">
                      {(item as any).cvAnalyzed ? 'CV Analysis' : 'AI Analysis'}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${getStatusBadgeColor(item.status)}`}></div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.aiAnalysis}</p>
                </div>

                {/* Food Bank Notification for Bella */}
                {(item as any).foodBankNotified && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-bold text-blue-700">🤝 Food Bank Notified</span>
                    </div>
                    <div className="space-y-1 text-xs text-blue-600">
                      <p>• Toronto Food Bank - Pickup at {(item as any).pickupScheduled}</p>
                      <p>• Community Kitchen - Backup recipient</p>
                      <p>• Tax credit value: {(item as any).donationValue}</p>
                    </div>
                  </div>
                )}

                {/* Marketplace Ready Banner */}
                {(item as any).marketplaceReady && (
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-bold text-emerald-700">🛍️ Ready for Marketplace</span>
                    </div>
                    <p className="text-xs text-emerald-600">50% discount bundle automatically created</p>
                  </div>
                )}

                <button 
                  className={`w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-200 ${
                    notifyingFoodBank === item.id 
                      ? 'bg-blue-500 text-white cursor-not-allowed'
                      : applyingDiscount === item.id
                        ? 'bg-orange-500 text-white cursor-not-allowed'
                        : (item as any).marketplaceReady && item.discountPrice === item.originalPrice
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                          : (item as any).marketplaceReady && item.discountPrice < item.originalPrice
                            ? 'bg-green-100 text-green-700 cursor-default'
                            : (item as any).foodBankNotified 
                              ? 'bg-blue-100 text-blue-700 cursor-default'
                              : item.status === 'critical' && item.name.includes('Bella')
                                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                                : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                  }`}
                  onClick={() => {
                    if (item.status === 'critical' && item.name.includes('Bella') && !(item as any).foodBankNotified && notifyingFoodBank !== item.id) {
                      handleNotifyFoodBank(item.id)
                    } else if ((item as any).marketplaceReady && item.discountPrice === item.originalPrice && applyingDiscount !== item.id) {
                      handleApplyDiscount(item.id)
                    }
                  }}
                  disabled={notifyingFoodBank === item.id || applyingDiscount === item.id || (item as any).foodBankNotified || ((item as any).marketplaceReady && item.discountPrice < item.originalPrice)}
                >
                  {notifyingFoodBank === item.id ? '⏳ Notifying Food Banks...' :
                   applyingDiscount === item.id ? '⏳ Applying 50% Discount...' :
                   (item as any).marketplaceReady && item.discountPrice === item.originalPrice ? 'Move to 50% Off Bundle' :
                   (item as any).marketplaceReady && item.discountPrice < item.originalPrice ? 'Discount Applied' :
                   (item as any).foodBankNotified ? 'Donation Scheduled' :
                   item.status === 'critical' && item.name.includes('Bella') ? 'Notify Food Banks' :
                   item.status === 'critical' ? 'Apply Discount Now' : 'Monitor Item'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}