import {
  LOAD_COMPANY,
} 
from '../constants'

const initialState = {
  loading: false,
  errorMessage: '',
  companyInfo: {
    companyName: '',
    companyMotto: '',
    companyEst: ''
  },
  employees: []
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPANY:
      return {
        ...state,
        companyInfo: action.data.companyInfo,
        employees: action.data.employees
      }    
    default:
      return state
  }
}
