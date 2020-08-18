import CustomElement from './custom-element'
export default class CustomInputNumber extends CustomElement {

    constructor(el){
        super(el, 'custom-input-checkbox')
        
        this.hasLabel()

        this.bind()
    }

    bind(){
        this.el.addEventListener('click', ()=>{
            if(this.el.checked) this.container.classList.add('active')
            else this.container.classList.remove('active')
        })
    }

}
