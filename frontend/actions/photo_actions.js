import * as PhotoApiUtil from "./../util/photo_api_util";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => {
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
}

export const fetchPhotos = () => dispatch => {
  return PhotoApiUtil.fetchPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
}