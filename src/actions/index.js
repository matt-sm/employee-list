import data from '../sample-data.json'
import {
  LOAD_COMPANY
} from '../constants'

export const loadCompany = () => {
    return { type: LOAD_COMPANY, data }
}

