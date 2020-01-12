export const getRequestOptions = <S>(method: string, body: S) => {
  return {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  }
}
