import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
        {searchTerm && (
          <SearchResultsList
            results={filteredProducts.length > 0 ? filteredProducts : products}
          />
        )}
      </div>
    </div>
  );
}

export default App;
