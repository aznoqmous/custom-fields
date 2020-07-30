import CustomSelect from './custom-select'
import CustomInputNumber from './custom-input-number'
import CustomInputCheckbox from './custom-input-checkbox'

export default class CustomFields {
    constructor(selector){
        this.selector = selector
        this.className = 'custom-element'
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

            if(el.tagName == 'INPUT' && el.type == 'number') new CustomInputNumber(el)
            if(el.tagName == 'INPUT' && el.type == 'checkbox') new CustomInputCheckbox(el)
            if(el.tagName == 'SELECT') new CustomSelect(el)

        })
    }

}
