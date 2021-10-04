import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab({ label, href }) {
  return (
    <Tab
      component={Link}
      label={label}
      to={href}
    />
  );
}

export default function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="navigation bar" centered>
        <LinkTab label="View All Posts" href="/" />
        <LinkTab label="Create New Post" href="/add" />
      </Tabs>
    </Box>
  );
}