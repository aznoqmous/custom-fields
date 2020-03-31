import CustomSelect from './custom-select'
import CustomInputNumber from './custom-input-number'

export default class CustomFields {
    constructor(selector){
        this.els = [...document.querySelectorAll(selector)]
        this.els.map(el => this.build(el))
    }

    build(el){
        if(el.tagName == 'INPUT' && el.type == 'number') new CustomInputNumber(el)
        if(el.tagName == 'SELECT') new CustomSelect(el)
    }
    
}
