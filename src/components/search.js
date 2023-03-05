import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchBar = ({ setSearch }) => {
const inputProps = { 
  sx: {
    "& input": {
      textAlign: "center",
      fullWidth: "100%",
      
    },
  },
};

  
  return (
    <Box>
      <TextField id="standard-basic" 
      variant="standard"
      
      placeholder="Search" 
      InputProps={inputProps}
      onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );

    }
  
export default SearchBar;