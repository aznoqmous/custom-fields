import CustomSelect from './custom-select'
import CustomInputText from './custom-input-text'
import CustomTextarea from './custom-textarea'
import CustomInputNumber from './custom-input-number'
import CustomInputCheckbox from './custom-input-checkbox'
import CustomInputRadio from './custom-input-radio'

export default class CustomFields {
    constructor(selector, config){
        this.selector = selector
        this.className = 'custom-element'
        this.config = config
        this.build()
        this.bindObserver()
    }

    bindObserver(){
        this.observer = new MutationObserver(()=>{
            this.build()
        })
        this.observer.observe(document.body, {
            attributes: false,
            childList: true,
            subtree: true
        })
    }

    build(){
        this.els = [...document.querySelectorAll(this.selector)]
        this.els.map(el => {
            // already bound
            if(el.parentElement.classList.contains(this.className)) return false;

            let customEl = null

            if(el.tagName == 'INPUT' && el.type == 'text') customEl = new CustomInputText(el)
            if(el.tagName == 'TEXTAREA') customEl = new CustomTextarea(el)
            if(el.tagName == 'INPUT' && el.type == 'number') customEl = new CustomInputNumber(el)
            if(el.tagName == 'INPUT' && el.type == 'checkbox') customEl = new CustomInputCheckbox(el)
            if(el.tagName == 'INPUT' && el.type == 'radio') customEl = new CustomInputRadio(el)
            if(el.tagName == 'SELECT') customEl = new CustomSelect(el)

            if(!customEl) return false;

            for(let key in this.config) customEl[key] = this.config[key]
        })
    }

}
