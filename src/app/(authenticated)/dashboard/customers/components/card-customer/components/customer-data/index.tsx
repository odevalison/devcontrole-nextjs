import { Customer } from '@/utils/customer.type'

type CustomerDataProps = {
  customer: Customer
}

export const CustomerData = ({ customer }: CustomerDataProps) => {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">Nome:</strong>
        <p className="truncate text-ellipsis">{customer.name}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">E-mail:</strong>
        <p className="truncate text-ellipsis">{customer.email}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">Número:</strong>
        <p>{customer.phone}</p>
      </div>
    </>
  )
}
