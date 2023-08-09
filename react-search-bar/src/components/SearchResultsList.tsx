import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

interface Startup {
  "Name of the startup": string;
  "Location of company": string;
  "Sector": string;
  "Company profile": string;
}

interface SearchResultsListProps {
  results: Startup[];
  onStartupClick: (startup: Startup) => void;
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, onStartupClick }) => {
  return (
    <div className="results-list">
      {results.map((startup, id) => {
        return (
          <SearchResult
            result={startup}
            key={id}
            onClick={() => onStartupClick(startup)} // Pass the startup data to the callback
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
