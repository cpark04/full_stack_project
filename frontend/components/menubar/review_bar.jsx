import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarRatings from 'react-star-ratings';
import CreateReviewModal from '../modal/create_review_modal';
import { splitCap } from '../../util/util';
import EditReviewModal from './../modal/edit_review_modal'
import { useHistory } from "react-router";
import PhotoForm from '../photo/photo_form';


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

// function handleDelete(review, e, deleteReview) {
//   e.preventDefault();
//   deleteReview(review);
// }

// function checkUser(currentUser, review, trail) {
//   if (currentUser === review.user_id) {
//     return <div className='edit-delete-container'>
//       <button className='review-delete-button' onClick={(e) => handleDelete(review, e)}>Delete</button>
//       <EditReviewModal trail={trail} review={review} />
//     </div>
//   }
// }

export default function ReviewBar({trail, currentUser, deleteReview}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const history = useHistory();

  const handleDelete = (e, review) => {
    e.preventDefault();
    deleteReview(review);
    history.go(0);
  }



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
            {Object.values(trail.reviews).reverse().map((review, idx) => {
              return <div key={'review'+`${idx}`} className="review-item-container">
                <div className="review-user-container">
                  <img src={review.pfp} alt="" className='review-user-photo'/>
                  <div className="review-user-name">{review.name}</div>
                  <div className='review-user-rating-container'>
                    <StarRatings rating={review.rating} starDimension="15px" starRatedColor="#f5d24b" starSpacing="2px" className='review-user-date'/>
                    <span className='review-user-date'>{new Date(review.review_date).toDateString()}</span>
                  </div>
                  <div className="review-user-tag-container">
                    {review.conditions.map((tag, idx) => {
                      return <span key={'tag'+`${idx}`} className='review-user-tag'>{splitCap(tag)}</span>
                    })}
                  </div>
                </div>
                <div className="review-comment-container">
                  <div className="review-comment">{review.comment}</div>
                </div>
                {/* {checkUser(currentUser, review, trail)} */}
                {(currentUser === review.user_id) ? <div className='edit-delete-container'>
                  <button className='review-delete-button' onClick={(e) => handleDelete(e, review.id)}>Delete</button>
                  <EditReviewModal trail={trail} review={review} />
                </div> : '' }
              </div>
            })}
          </div>

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <div>
           <PhotoForm trail={trail} currentUser={currentUser}/>
         </div>
          <div className="trail-photo-index">
            
          </div>


      </TabPanel>
      
    </Box>
  );
}