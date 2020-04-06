import CustomFields from './custom-fields'

import Styles from '../scss/style.scss'

export default CustomFields

document.addEventListener('DOMContentLoaded', ()=>{
    new CustomFields('select')
    new CustomFields('input')
})
