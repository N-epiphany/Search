import React from "react";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface SearchResultProps {
  result: Product;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="search-result">
      <img src={result.image} alt={result.title} />
      <div>
        <h3>{result.title}</h3>
        <p>Price: {result.price}</p>
        <p>Category: {result.category}</p>
        <p>{result.description}</p>
      </div>
    </div>
  );
};

export default SearchResult;
