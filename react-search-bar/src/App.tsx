import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import startupData from "./startups.json";

interface Startup {
  "Incubation Center": string;
  "Name of the startup": string;
  "Location of company": string;
  "Sector": string;
  "Company profile": string;
}

function App() {
  const [results, setResults] = useState<Startup[]>([]);
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} startupData={startupData} setSelectedStartup={setSelectedStartup} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} onStartupClick={handleStartupClick} />
        )}
      </div>
      {/* Display the selected startup's details */}
      {selectedStartup && (
        <div className="selected-startup-details">
          <h2>{selectedStartup["Name of the startup"]}</h2>
          <p>Location: {selectedStartup["Location of company"]}</p>
          <p>Sector: {selectedStartup["Sector"]}</p>
          <p>Company Profile: {selectedStartup["Company profile"]}</p>
          <p>Incubation Center: {selectedStartup["Incubation Center"]}</p>
        </div>
      )}
    </div>
  );
}

export default App;
