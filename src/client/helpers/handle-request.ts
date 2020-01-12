export const handleRequest = async (requestResult: Promise<Response>) => {
  let result
  try {
    const data = await requestResult
    result = await data.json()
  } catch (error) {
    throw new Error(error)
  }

  return result
}
