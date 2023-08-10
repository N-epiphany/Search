import React from "react";
import SearchResult from "./SearchResult";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface SearchResultsListProps {
  results: Product[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result) => (
        <Card key={result.id} className="search-result">
          <CardMedia
            component="img"
            height="140"
            image={result.image}
            alt={result.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {result.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {result.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {result.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResultsList;
