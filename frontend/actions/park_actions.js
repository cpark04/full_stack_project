import * as ParkApiUtil from "../util/park_api_util"

export const RECEIVE_ALL_PARKS = 'RECEIVE_ALL_PARKS';
export const RECEIVE_PARK = "RECEIVE_PARK";

const receiveAllParks = (parks) => {
  return {
    type: RECEIVE_ALL_PARKS,
    parks
  }
}

const receivePark = (park) => {
  return {
    type: RECEIVE_PARK,
    park
  }
}

export const fetchParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
        .then(parks => dispatch(receiveAllParks(parks)))
}

export const fetchPark = parkId => dispatch => {
    return ParkApiUtil.fetchPark(parkId)
        .then(park => dispatch(receivePark(park)))
}