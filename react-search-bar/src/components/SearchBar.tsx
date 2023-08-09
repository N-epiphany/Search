import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

interface Startup {
  "Incubation Center": string;
  "Name of the startup": string;
  "Location of company": string;
  "Sector": string;
  "Company profile": string;
}

interface SearchBarProps {
  setResults: (results: Startup[]) => void;
  startupData: Startup[];
  setSelectedStartup: (startup: Startup | null) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults, startupData, setSelectedStartup }) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    const filteredResults = startupData.filter(
      (startup: Startup) =>
        startup["Name of the startup"].toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleStartupClick = (startup: Startup) => {
    setSelectedStartup(startup); // Set the selected startup in the parent component
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
    setSelectedStartup(null); // Clear the selected startup when changing the search input
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* Display the selected startup's name */}
      {selectedStartup && <div>Selected: {selectedStartup["Name of the startup"]}</div>}
    </div>
  );
};

export default SearchBar;
