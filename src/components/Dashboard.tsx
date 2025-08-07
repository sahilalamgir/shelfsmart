'use client'

const IMPACT_DATA = {
  foodSaved: 1247,
  mealsProvided: 2890,
  co2Prevented: 3.2,
  costSavings: 18500,
  wasteReduction: 73,
  partnerships: 85,
  revenueRecovery: 67
}

const RECENT_ACTIVITIES = [
  { id: 1, time: '2 minutes ago', action: 'AI detected ripening in 45 bananas - applied 50% discount', type: 'ai', icon: '🤖' },
  { id: 2, time: '15 minutes ago', action: 'Successfully redistributed 25kg produce to Toronto Food Bank', type: 'success', icon: '✅' },
  { id: 3, time: '1 hour ago', action: 'Smart pricing applied to 8 sourdough loaves - 40% discount', type: 'pricing', icon: '💰' },
  { id: 4, time: '2 hours ago', action: 'Partnership activated with Community Kitchen for fresh produce', type: 'partnership', icon: '🤝' },
  { id: 5, time: '3 hours ago', action: 'Critical alert: 12 units organic milk expiring tomorrow', type: 'warning', icon: '⚠️' },
  { id: 6, time: '4 hours ago', action: 'Prevented 78kg food waste through intelligent redistribution', type: 'success', icon: '🌱' }
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-600 text-sm font-medium uppercase tracking-wide">Food Rescued</p>
              <p className="text-3xl font-bold text-emerald-700 mt-1">{IMPACT_DATA.foodSaved}</p>
              <p className="text-emerald-600 text-sm">kilograms saved</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🥬</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-emerald-600">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
              <span>+12% vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium uppercase tracking-wide">Meals Provided</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">{IMPACT_DATA.mealsProvided.toLocaleString()}</p>
              <p className="text-blue-600 text-sm">to families in need</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-blue-600">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              <span>+23% vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium uppercase tracking-wide">CO₂ Prevented</p>
              <p className="text-3xl font-bold text-purple-700 mt-1">{IMPACT_DATA.co2Prevented}t</p>
              <p className="text-purple-600 text-sm">carbon emissions</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-purple-600">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              <span>+8% vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-600 text-sm font-medium uppercase tracking-wide">Revenue Recovered</p>
              <p className="text-3xl font-bold text-amber-700 mt-1">${IMPACT_DATA.costSavings.toLocaleString()}</p>
              <p className="text-amber-600 text-sm">through smart pricing</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-amber-600">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
              <span>+15% vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Performance Analytics</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Waste Reduction Rate</span>
                <span className="text-sm font-bold text-emerald-600">{IMPACT_DATA.wasteReduction}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{width: `${IMPACT_DATA.wasteReduction}%`}}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Community Partnerships</span>
                <span className="text-sm font-bold text-blue-600">{IMPACT_DATA.partnerships}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{width: `${IMPACT_DATA.partnerships}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Revenue Recovery</span>
                <span className="text-sm font-bold text-amber-600">{IMPACT_DATA.revenueRecovery}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{width: `${IMPACT_DATA.revenueRecovery}%`}}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Live Activity Feed</h2>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">{activity.icon}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800 leading-relaxed">{activity.action}</p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100 hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
              <span className="text-lg">🤖</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">Run AI Analysis</p>
              <p className="text-sm text-slate-600">Scan for spoilage patterns</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <span className="text-lg">💰</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">Smart Pricing</p>
              <p className="text-sm text-slate-600">Apply dynamic discounts</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <span className="text-lg">🤝</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">Contact Partners</p>
              <p className="text-sm text-slate-600">Notify charity network</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}