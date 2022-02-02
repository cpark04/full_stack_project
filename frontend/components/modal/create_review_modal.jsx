import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CreateReviewContainer from './../review/create_review_container'



export default function CreateReviewModal({trail}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='review-create-container'>
      <Button className='review-create-button' onClick={handleOpen}>Write Review</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick={handleClose}
        className='create-modal-container'
        title={<div className='create-close-button'>X</div>}
      >
        <Box className="create-review-form-container">
          <div className="create-close-button-container">
            <button onClick={handleClose} className="create-close-button">
              X
            </button>
          </div>
          <CreateReviewContainer trail={trail}/>
        </Box>
      </Modal>
    </div>
  );
}