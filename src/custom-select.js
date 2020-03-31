export default class CustomSelect {
    constructor(el){
        this.el = el
        this.originEl = this.el.children[0]
        this.className = 'custom-input-select'
        this.build()
    }
    build(){
        this.el.className = this.className
    }
}
