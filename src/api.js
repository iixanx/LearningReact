export async function getReviews() {
  const response = await fetch('https://lean.codeit.kr/0013/film-reviews')
  const body = await response.json();
  return body;
}