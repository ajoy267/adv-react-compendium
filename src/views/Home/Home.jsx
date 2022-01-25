import React, { useEffect, useState } from 'react';
import BreweryCard from '../../components/BreweryCard';
import { fetchBreweries } from '../../services/breweries';
import './Home.css';

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
  if (loading) return <h1>loading...</h1>;
  return (
    <div>
      <BreweryCard breweries={breweries} />
    </div>
  );
}
