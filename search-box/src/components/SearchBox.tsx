import React, { useState } from 'react';
import './SearchBox.css';
import { FaSearch } from 'react-icons/fa'; // Assuming you're using Font Awesome

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      onSearch(searchQuery);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Attach the key press event handler
      />
    </div>
  );
};

export default SearchBox;
