import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateReviewForm from '../review/create_review_form';
import { DialogTitle } from '@mui/material';

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

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
          <CreateReviewForm trail={trail}/>
        </Box>
      </Modal>
    </div>
  );
}