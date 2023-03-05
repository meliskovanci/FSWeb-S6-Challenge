// Karakter bileşeniniz buraya gelecek
import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

const Char = ({ char, key }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      console.log(panel, isExpanded);
  
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div style={{ marginTop: "1rem" }}>
        <Accordion
         
          expanded={expanded === key} 
          onChange={handleChange(key)}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {char.name}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {char.birth_year}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "grid",
                  gap: 1,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <Item>Gender: {char.gender}</Item>
                <Item>Eye Color: {char.eye_color}</Item>
                <Item>Height: {char.height}</Item>
                <Item>Hair Color: {char.hair_color}</Item>
                <Item>Mass:{char.mass}</Item>
                <Item>Skin Color:{char.skin_color}</Item>
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  
  export default Char;