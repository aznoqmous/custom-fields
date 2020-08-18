export default class CustomElement {
    constructor(el, className=''){
        this.className = className + ' custom-element'

        this.wrap(el)
        this.bindEvents()
        // build
    }

    /**
     * Wrap element inside a container with config.className
     */
    wrap(el){
        this.el = el
        let index = [...el.parentElement.children].indexOf(el)
        this.container = document.createElement('div')
        el.parentElement.insertBefore(this.container, el)
        this.container.appendChild(el)
        this.container.className = this.className
        this.container.classList.add('custom-element')
    }
    bindEvents(){
        this.el.addEventListener('focusin', (e)=>{
            this.container.classList.add('focus')
            if(this.focusin) this.focusin(this)
        })
        this.el.addEventListener('focusout', (e)=>{
            this.container.classList.remove('focus')
            if(this.focusout) this.focusout(this)
        })
    }

    setStyles(styles, el=null){
        if(!el) el = this.container
        for(let key in styles) el.style[key] = `${styles[key]}`
    }

    setElStyles(styles){
        this.setStyles(styles, this.el)
    }

    triggerEvent(name){
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(name, true, true);
            this.el.dispatchEvent(evt);
        }
        else
            this.el.fireEvent(`on${name}`);
    }

    triggerChange(){
        this.triggerEvent('input')
        this.triggerEvent('change')
        this.triggerEvent('keyup')
    }

    /**
     * Try to bind a label given el.id
     */
    hasLabel(){
        if(this.el.id) this.label = document.querySelector(`label[for="${this.el.id}"]`)

        this.container.addEventListener('mouseenter', (e)=>{
            this.container.classList.add('hover')
        })

        this.container.addEventListener('mouseleave', (e)=>{
            this.container.classList.remove('hover')
        })

        if(this.label) {
            this.label.addEventListener('mouseenter', (e)=>{
                this.container.classList.add('hover')
            })

            this.label.addEventListener('mouseleave', (e)=>{
                this.container.classList.remove('hover')
            })
        }

    }

    getPreviousFormField(){
        let formFields = [...document.querySelectorAll('input,select,textarea')]
        let previousIndex = formFields.indexOf(this.el) - 1
        if(previousIndex < 0) previousIndex = formFields.length - 1
        return formFields[previousIndex]
    }
    getNextFormField(){
        let formFields = [...document.querySelectorAll('input,select,textarea')]
        let nextIndex = formFields.indexOf(this.el) + 1
        if(nextIndex > formFields.length - 1) nextIndex = 0
        return formFields[nextIndex]
    }

}
