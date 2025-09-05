interface CardCustomerDataProps {
  name: string;
  email: string;
  phone: string;
}

export function CardCustomerData({
  name,
  email,
  phone,
}: CardCustomerDataProps) {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">Nome:</strong>
        <p className="truncate text-ellipsis">{name}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">E-mail:</strong>
        <p className="truncate text-ellipsis">{email}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <strong className="truncate text-ellipsis">Número:</strong>
        <p>{phone}</p>
      </div>
    </>
  );
}
