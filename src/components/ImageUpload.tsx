'use client'

import { useState } from 'react'

interface ImageUploadProps {
  onAnalysisComplete: (result: any) => void
}

export default function ImageUpload({ onAnalysisComplete }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    const reader = new FileReader()
    
    reader.onload = (e) => {
      const result = e.target?.result as string
      setUploadedImage(result)
      setUploading(false)
      
      // Simulate CV analysis
      setAnalyzing(true)
      setTimeout(() => {
        // Hardcoded analysis for banana demo
        const analysisResult = {
          id: Date.now(),
          name: 'Organic Bananas',
          category: 'Produce',
          quantity: 25,
          originalPrice: 2.99,
          expiryDate: '2025-08-09',
          daysUntilExpiry: 2,
          hoursUntilExpiry: 48,
          condition: 'Good',
          discountPrice: 1.50,
          aiAnalysis: 'CV detected slight browning on 20% of bananas. Quality assessment: Good. Estimated 48 hours until overripe. Recommend 50% discount for immediate sale.',
          status: 'near-expiry',
          image: '🍌',
          cvConfidence: 94,
          detectedIssues: ['Minor browning spots', 'Natural ripening process'],
          recommendedAction: 'Apply 50% discount and move to marketplace'
        }
        
        setAnalyzing(false)
        onAnalysisComplete(analysisResult)
      }, 3000)
    }
    
    reader.readAsDataURL(file)
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📷</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">AI-Powered Food Analysis</h2>
          <p className="text-slate-600">Upload an image for instant quality assessment and expiry prediction</p>
        </div>

        {!uploadedImage && !uploading && !analyzing && (
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 hover:border-blue-400 transition-colors">
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
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📤</span>
              </div>
              <p className="text-lg font-medium text-slate-700 mb-2">Drop your image here or click to upload</p>
              <p className="text-sm text-slate-500">PNG, JPG up to 10MB</p>
            </label>
          </div>
        )}

        {uploading && (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg font-medium text-slate-700">Uploading image...</p>
          </div>
        )}

        {uploadedImage && analyzing && (
          <div className="space-y-6">
            <div className="relative">
              <img
                src={uploadedImage}
                alt="Uploaded food item"
                className="max-w-full max-h-64 object-contain mx-auto rounded-xl shadow-sm"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="animate-spin w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"></div>
                  <p className="font-medium text-slate-800">Analyzing with CV model...</p>
                  <p className="text-sm text-slate-600 mt-1">Detecting freshness, quality & expiry</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {uploadedImage && !analyzing && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <p className="text-lg font-bold text-green-700 mb-2">Analysis Complete!</p>
            <p className="text-slate-600">Item has been added to your inventory with AI recommendations</p>
          </div>
        )}
      </div>
    </div>
  )
}