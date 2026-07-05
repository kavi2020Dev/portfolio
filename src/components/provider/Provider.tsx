import React from 'react'
import Header from '../shared/Header'
import ScrollProgress from '../shared/ScrollProgress'
import CursorGlow from '../shared/CursorGlow'

interface ProviderSetupProps {
  children: React.ReactNode
}

const ProviderSetup = ({ children }: ProviderSetupProps) => {
  return (
    <div>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      {children}
    </div>
  )
}

export default ProviderSetup
