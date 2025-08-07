'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import Dashboard from '@/components/Dashboard'
import Inventory from '@/components/Inventory'
import Marketplace from '@/components/Marketplace'

export default function ShelfSmartApp() {
  const [activeTab, setActiveTab] = useState('inventory')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'inventory':
        return <Inventory />
      case 'marketplace':
        return <Marketplace />
      default:
        return <Inventory />
    }
  }

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  )
}
