import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarRatings from 'react-star-ratings';
import CreateReviewModal from '../modal/create_review_modal';


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

export default function ReviewBar({trail}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs TabIndicatorProps={{style: {background:'green'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ textTransform: "none" }} label="Reviews" {...a11yProps(0)} />
          <Tab sx={{ textTransform: "none" }} label="Photos" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="review-container">
          <CreateReviewModal trail={trail}/>          
          <div className='review-index'>
            {Object.values(trail.reviews).map((review, idx) => {
              return <div key={'review'+`${idx}`} className="review-item-container">
                <div className="review-user-container">
                  <img src={review.pfp} alt="" className='review-user-photo'/>
                  <div className="review-user-name">{review.name}</div>
                  <div className='review-user-rating-container'>
                    <StarRatings rating={review.rating} starDimension="15px" starRatedColor="#f5d24b" starSpacing="2px" className='review-user-date'/>
                    <span className='review-user-date'>{new Date(review.review_date).toDateString()}</span>
                  </div>
                </div>
                <div className="review-comment-container">
                  <div className="review-comment">{review.comment}</div>
                </div>
              </div>
            })}
          </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
         

      </TabPanel>
      
    </Box>
  );
}