export default class CustomElement {
    constructor(el, className='custom-element'){

        this.className = className

        // build
        this.el = el
        let index = [...el.parentElement.children].indexOf(el)
        this.container = document.createElement('div')
        el.parentElement.insertBefore(this.container, el)
        this.container.appendChild(el)
        this.container.className = this.className
    }

    setStyles(styles, el=null){
        if(!el) el = this.container
        for(let key in styles) el.style[key] = `${styles[key]}`
    }

    setElStyles(styles){
        this.setStyles(styles, this.el)
    }

}
