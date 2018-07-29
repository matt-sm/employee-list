import data from '../sample-data.json'
import { GET_COMPANY, SET_MODAL_VISIBILITY, SET_MODAL_DATA } from '../constants'

export const loadCompany = () => {
  return { type: GET_COMPANY, data }
}

export const openModal = employee => dispatch => {
  dispatch(setModalData(employee))
  dispatch(setModalVisibility(true))
}

export const closeModal = employee => dispatch => {
  dispatch(setModalVisibility(false))
}

const setModalVisibility = visibility => {
  return { type: SET_MODAL_VISIBILITY, visibility }
}

const setModalData = data => {
  return { type: SET_MODAL_DATA, data }
}
