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
  let day = new Date(forecast.date)
  day = day.toLocaleDateString(undefined, {weekday: 'long'})
  return day
}

function getUvIcon(uv) {
  if (uv === 1 || uv === 2) {
    return <img src="https://cdn-assets.alltrails.com/assets/icons/cuttlefish-weather/uv/icons-uv-low.png" alt="" className='uv-icon'/>
  } else if (uv === 3 || uv === 4) {
    return <img src="https://cdn-assets.alltrails.com/assets/icons/cuttlefish-weather/uv/icons-uv-moderate.png" alt="" className='uv-icon'/>
  } else {
    return <img src="https://cdn-assets.alltrails.com/assets/icons/cuttlefish-weather/uv/icons-uv-high.png" alt="" className='uv-icon'/>
  }
}

function getUvStrength(uv) {
  if (uv === 1 || uv === 2) {
    return "Low"
  } else if (uv === 3 || uv === 4) {
    return "Moderate"
  } else {
    return "High"
  }
}

function getUvNum(uv) {
  if (uv === 1 || uv === 2) {
    return <span className='weather-uv-num' style={{color: '#69a041'}}>{uv}</span>
  } else if (uv === 3 || uv === 4) {
    return <span className='weather-uv-num' style={{color: '#f5d24b'}}>{uv}</span>
  } else {
    return <span className='weather-uv-num' style={{color: '#orange'}}>{uv}</span>
  }
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

          {forecastArr.map((forecast, idx) => {
            return (
              <li key={'weather'+`${idx}`} className="weather-forecast">
                <h3 className="weather-date">
                  {getDay(forecast)}
                </h3>
                <div className="weather-icon-container">
                  <img src={forecast.day.condition.icon} alt="" className='weather-icon'/>
                </div>
                <h4 className="weather-degrees">
                  {forecast.day.maxtemp_f}&#176; / {forecast.day.mintemp_f}&#176; F
                </h4>
              </li>
            )
          })}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <ul className='weather-bar-container'>
         {forecastArr.map((forecast, idx) => {
           return (
              <li key={'weather'+`${idx}`} className="weather-forecast">
                <h3 className="weather-date-uv">
                  {getDay(forecast)}
                </h3>
                <div className="uv-icon-container">
                  <div className="weather-uv-num-container">
                    {getUvNum(forecast.day.uv)}
                  </div>
                  {getUvIcon(forecast.day.uv)}
                </div>
                <h4 className="uv-strength">
                  {getUvStrength(forecast.day.uv)}
                </h4>
              </li>
           )
         })}
       </ul>

      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul className='daylight-container'>
          <li className='weather-forecast'>
            <h3 className='weather-date-uv'>
              Sunrise
            </h3>
            <div className='uv-icon-container'>
              <img src="https://cdn-assets.alltrails.com/assets/icons/cuttlefish-weather/sun/icons-daytime-sunrise.png" alt="" className='uv-icon'/>
            </div>
            <h4 className='uv-strength'>{forecastArr[0].astro.sunrise}</h4>
          </li>

          <li className='weather-forecast'>
            <h3 className='weather-date-uv'>
              Sunset
            </h3>
            <div className='uv-icon-container'>
              <img src="https://cdn-assets.alltrails.com/assets/icons/cuttlefish-weather/sun/icons-daytime-sunset.png" alt="" className='uv-icon'/>
            </div>
            <h4 className='uv-strength'>{forecastArr[0].astro.sunset}</h4>
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}