import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

const PaginationBar = ({ count, setPage}) => {
  return (
    <Stack>
      <Pagination 
      count={count}
      size="small" 
      style={{
        marginTop: "1rem",
        background: "linear-gradient(45deg, #53c0ff 30%, #fe6bb7 90%)",
        display: "flex",
        justifyContent: "center",
      }}
      onChange={(e) => {
        setPage(e.target.textContent);
        
      }}
      />
    </Stack>
  );
}

export default PaginationBar;