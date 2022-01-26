import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) return <h1>loading...</h1>;

  return <div>Pokemon</div>;
}
