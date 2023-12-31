export default async function Api(url) {
  const res = await fetch(url);
  const data = await res.json();
  const valorDta = await data;
  return valorDta
}
