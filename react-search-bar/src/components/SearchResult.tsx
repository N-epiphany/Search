import React from "react";
import "./SearchResult.css";

interface SearchResultProps {
  result: any; // Change the type to any to accommodate startup data
  onClick: () => void; // Add an onClick prop
}

const SearchResult: React.FC<SearchResultProps> = ({ result, onClick }) => {
  return (
    <div className="search-result" onClick={onClick}>
      {result["Name of the startup"]} {/* Display startup name */}
    </div>
  );
};


export default SearchResult;
