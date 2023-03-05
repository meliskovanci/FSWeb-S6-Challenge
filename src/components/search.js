import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchBar = ({ setSearch }) => {
const inputProps = { 
  sx: {
    "& input": {
      textAlign: "center",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      fullWidth: "100%",
    },
  },
};

  
  return (
    <Box>
      <TextField id="standard-basic" 
      label="Standard" 
      variant="standard" 
      InputProps={inputProps}
      onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );

    }
  
export default SearchBar;