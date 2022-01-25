import React, { useEffect, useState } from 'react';
import BreweryCard from '../../components/BreweryCard';
import { fetchBreweries } from '../../services/breweries';

export default function Home() {
  const [breweries, setBreweries] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBreweries = async () => {
      const resp = await fetchBreweries();
      setBreweries(resp);
      setLoading(false);
    };
    getBreweries();
  }, [loading]);
  return (
    <div>
      <BreweryCard breweries={breweries} />
    </div>
  );
}
