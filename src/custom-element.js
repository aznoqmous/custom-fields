export default class CustomElement {
    constructor(el, className='custom-element'){
        this.className = className

        this.wrap(el)
        // build
    }

    wrap(el){
        this.el = el
        let index = [...el.parentElement.children].indexOf(el)
        this.container = document.createElement('div')
        el.parentElement.insertBefore(this.container, el)
        this.container.appendChild(el)
        this.container.className = this.className
        this.container.classList.add('custom-element')
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

}
