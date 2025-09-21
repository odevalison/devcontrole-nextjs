import { Container } from '@/components/container'

import { SearchCustomerForm } from './components/search-customer-form'

const OpenTicketPage = () => {
  return (
    <Container className="flex h-[calc(100dvh-80px)] flex-col gap-5">
      <div className="mx-auto flex w-2xl max-w-full flex-col gap-5">
        <h1 className="text-center text-2xl font-bold">Abrir chamado</h1>

        <SearchCustomerForm />
      </div>
    </Container>
  )
}

export default OpenTicketPage
