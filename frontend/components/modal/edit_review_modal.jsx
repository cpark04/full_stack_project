import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditReviewContainer from "./../review/edit_review_container";

export default function EditReviewModal({ trail, review }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button href='' className='review-edit-button' onClick={handleOpen}>
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onBackdropClick={handleClose}
        className='create-modal-container'
        title={<div className='create-close-button'>X</div>}
      >
        <Box className='create-review-form-container'>
          <div className='create-close-button-container'>
            <button onClick={handleClose} className='create-close-button'>
              X
            </button>
          </div>
          <EditReviewContainer trail={trail} review={review} />
        </Box>
      </Modal>
    </div>
  );
}
