import CustomElement from './custom-element'
export default class CustomInputNumber extends CustomElement {
    constructor(el){
        super(el, 'custom-input-number')

        this.build()
        this.bind()
    }

    build(){
        this.controls = document.createElement('div')
        this.controls.className = 'controls'

        this.up = document.createElement('i')
        this.down = document.createElement('i')
        this.up.className = 'up'
        this.down.className = 'down'

        this.number = document.createElement('span')
        this.number.innerHTML = this.el.value
        this.el.style.display = 'none'

        this.controls.appendChild(this.up)
        this.controls.appendChild(this.down)
        this.container.appendChild(this.number)
        this.container.appendChild(this.controls)
    }

    bind(){
        let step = this.el.getAttribute('step')
        let min = this.el.getAttribute('min')
        let max = this.el.getAttribute('max')

        if(min === null) min = 0
        if(max === null) max = null
        if(step === null) step = 1

        if(step) step = parseFloat(step)

        this.container.addEventListener('click', ()=>{
            this.el.focus()
        })

        this.up.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) + step
            if( max !== null && parseFloat(this.el.value) > parseFloat(max)) this.el.value = max
            this.triggerChange()
        })
        this.down.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) - step
            if( min !== null && parseFloat(this.el.value) < parseFloat(min)) this.el.value = min
            this.triggerChange()
        })

        this.el.addEventListener('change', ()=>{
            this.number.innerHTML = this.el.value
        })
    }

}
