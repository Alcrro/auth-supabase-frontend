export async function getGeolocation() {
  const fetchGeolocation = await fetch(`https://ipapi.co/json/`);
  const result = await fetchGeolocation.json();

  return result;
}
