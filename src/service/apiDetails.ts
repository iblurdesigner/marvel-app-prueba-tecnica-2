export async function apiDetails(id:string) {
  const response = await fetch (`https://gateway.marvel.com/v1/public/series/${id}?limit=50&ts=100&apikey=f26fcec8c4238531db72a55e146f2b72&hash=08b861e0420d37a1a417cd1e2d586504`)
  
  return response.json()
}