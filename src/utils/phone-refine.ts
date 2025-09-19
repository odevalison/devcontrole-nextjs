export const phoneRefine = (phone: string) => {
  return (
    /^(?:\(\d{2}\)\s?)9\d{8}$/.test(phone) || /^\d{2}\s?9\d{8}$/.test(phone)
  )
}
