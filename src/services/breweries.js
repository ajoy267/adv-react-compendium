export async function getBreweries() {
  const resp = await fetch('https://api.openbrewerydb.org/breweries');
  const data = await resp.json();

  return data;
}
