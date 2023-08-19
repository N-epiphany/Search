import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ProductCard from './components/ProductCard';
import './App.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data); // Add this line to check API response
  //  ====prev====
      // const filteredResults = data.filter((product: Product) =>
      //   product.title.toLowerCase().includes(query.toLowerCase())
      // );
      // console.log(filteredResults); // Check if products are filtered correctly
    

      // setSearchResults(filteredResults);
      // ====prev====
      setSearchResults(data); // Set searchResults to the entire data array



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(searchResults); // Check contents of searchResults before rendering

  return (
    <div className="app">
      <SearchBox onSearch={handleSearch} />
      <div className="product-list">
        {searchResults.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  {console.log(searchResults)}
};

export default App;
