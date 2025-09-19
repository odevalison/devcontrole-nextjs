import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { Container } from '@/components/container'
import { authOptions } from '@/lib/auth'

import { HeaderDashboard } from './components/header'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await getServerSession(authOptions)
  if (!session || !session?.user) {
    redirect('/')
  }

  return (
    <Container className="space-y-5">
      <HeaderDashboard />
      {children}
    </Container>
  )
}

export default DashboardLayout
