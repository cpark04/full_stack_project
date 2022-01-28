import * as React from 'react';
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


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function getDay(forecast) {
  console.log(forecast)
  let day = new Date(forecast.date)
  day = day.toLocaleDateString(undefined, {weekday: 'long'})
  return day
}

export default function WeatherBar({lat, long, forecastArr}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs TabIndicatorProps={{style: {background:'green'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ textTransform: "none" }} label="Weather" {...a11yProps(0)} />
          <Tab sx={{ textTransform: "none" }} label="UV Index" {...a11yProps(1)} />
          <Tab sx={{ textTransform: "none" }} label="Daylight" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className='weather-bar-container'>
          <li className="weather-forecast">
            <h3 className="weather-date">
              {getDay(forecastArr[0])}
            </h3>
            <div className="weather-icon-container">
              <img src={forecastArr[0].day.condition.icon} alt="" className='weather-icon'/>
            </div>
            <h4 className="weather-degrees">
              {forecastArr[0].day.maxtemp_f}&#176; / {forecastArr[0].day.mintemp_f}&#176; F
            </h4>
          </li>
          <li className="weather-forecast">
            <h3 className="weather-date">
              {getDay(forecastArr[1])}
            </h3>
            <div className="weather-icon-container">
              <img src={forecastArr[1].day.condition.icon} alt="" className='weather-icon'/>
            </div>
            <h4 className="weather-degrees">
              {forecastArr[1].day.maxtemp_f}&#176; / {forecastArr[1].day.mintemp_f}&#176; F
            </h4>
          </li>
          <li className="weather-forecast">
            <h3 className="weather-date">
              {getDay(forecastArr[2])}
            </h3>
            <div className="weather-icon-container">
              <img src={forecastArr[2].day.condition.icon} alt="" className='weather-icon'/>
            </div>
            <h4 className="weather-degrees">
              {forecastArr[2].day.maxtemp_f}&#176; / {forecastArr[2].day.mintemp_f}&#176; F
            </h4>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>

      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
    </Box>
  );
}