export async function fetchBreweries() {
  const resp = await fetch('https://api.openbrewerydb.org/breweries');
  const data = await resp.json();

  return data;
}
