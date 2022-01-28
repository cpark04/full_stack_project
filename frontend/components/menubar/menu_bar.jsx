import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShowMoreText from "react-show-more-text";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MenuBar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs TabIndicatorProps={{style: {background:'green'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ textTransform: "none" }} label="Description" {...a11yProps(0)} />
          <Tab sx={{ textTransform: "none" }} label="Facilities" {...a11yProps(1)} />
          <Tab sx={{ textTransform: "none" }} label="Contact" {...a11yProps(2)} />
          <Tab sx={{ textTransform: "none" }} label="Tips" {...a11yProps(3)} />
          <Tab sx={{ textTransform: "none" }} label="Getting There" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ShowMoreText lines={4}  ><pre>{props.trail.description}</pre></ShowMoreText>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <pre>{props.trail.facilities}</pre>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <pre>{props.trail.contact}</pre>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <pre>{props.trail.tips}</pre>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <pre>{props.trail.getting_there}</pre>
      </TabPanel>
    </Box>
  );
}