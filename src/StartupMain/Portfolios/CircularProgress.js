import React from 'react';
import {CircularProgress,Typography,Box} from '@material-ui/core';

export default function CircularProgressIcon({num}) {
  
  return (
    <Box position="relative" display="flex" style={{ padding:"12px",marginLeft:"1rem"}}>
    <CircularProgress variant="static" value={num} style={{width:"75px",height:"75px",color:"#17a2b8",strokeLinecap: 'round',borderColor:"#fff"}} thickness={2} />
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h6" color="secondary">{`${num}%`}</Typography>
    </Box>
  </Box>

  );
}
