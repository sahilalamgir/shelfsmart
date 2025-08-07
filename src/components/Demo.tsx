'use client'

import { useState } from 'react'
import ImageUpload from './ImageUpload'
import Inventory from './Inventory'

export default function Demo() {
  const [showUpload, setShowUpload] = useState(true)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleAnalysisComplete = (result: any) => {
    setAnalysisComplete(true)
    setTimeout(() => {
      setShowUpload(false)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      {/* Demo Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">ShelfSmart Demo</h1>
          <p className="text-blue-100 text-lg">
            Experience AI-powered food waste prevention in action
          </p>
        </div>
      </div>

      {/* Demo Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📷</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Step 1: Upload Image</h3>
            <p className="text-slate-600 text-sm">Upload a banana image for CV analysis</p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Step 2: AI Analysis</h3>
            <p className="text-slate-600 text-sm">48h expiry detected, 50% discount applied</p>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛍️</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Step 3: Marketplace</h3>
            <p className="text-slate-600 text-sm">Move to 50% off public bundle</p>
          </div>
        </div>
      </div>

      {/* Current Scenario Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🎬</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-800 mb-1">Demo Scenario Active</h3>
            <p className="text-amber-700">
              <strong>Bella the Banana</strong> is already in inventory with 12h left → food banks notified. 
              Upload a new banana image to see the 48h scenario in action!
            </p>
          </div>
        </div>
      </div>

      {showUpload && (
        <ImageUpload onAnalysisComplete={handleAnalysisComplete} />
      )}

      <Inventory />
    </div>
  )
}