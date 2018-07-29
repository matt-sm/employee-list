import { GET_COMPANY, SET_MODAL_VISIBILITY, SET_MODAL_DATA } from '../constants'

const initialState = {
  loading: false,
  errorMessage: '',
  modalOpen: false,
  modalData: {},
  companyInfo: {
    companyName: '',
    companyMotto: '',
    companyEst: ''
  },
  employees: []
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        companyInfo: action.data.companyInfo,
        employees: action.data.employees
      }
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        modalOpen: action.visibility
      }
    case SET_MODAL_DATA:
      return {
        ...state,
        modalData: action.data
      }
    default:
      return state
  }
}
