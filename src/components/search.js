import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchBar = ({ setSearch }) => {

  
  return (
    <Box
      component="form"
      
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" 
      label="Standard" 
      variant="standard" 
      // InputProps={inputProps}
      onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );

    }
  
export default SearchBar;