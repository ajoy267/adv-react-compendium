import React from 'react';

export default function BreweryCard({ breweries }) {
  return (
    <div>
      <h1>List of Breweries</h1>
      <div>
        {breweries.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.city}</p>
            <p>{item.state}</p>
            <p>Type: {item.brewery_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
