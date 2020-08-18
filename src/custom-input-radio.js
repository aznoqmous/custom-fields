import CustomElement from './custom-element'

export default class CustomInputRadio extends CustomElement {

    constructor(el){
        super(el, 'custom-input-radio')

        this.hasLabel()

        this.bind()
    }

    bind(){
        this.el.addEventListener('change', (e)=>{
            let siblings = [...document.querySelectorAll(`input[type="radio"][name="${this.el.name}"]`)]
            siblings.map(el => {
                if(el.checked) el.parentElement.classList.add('active')
                else el.parentElement.classList.remove('active')
            })
        })
    }

}
