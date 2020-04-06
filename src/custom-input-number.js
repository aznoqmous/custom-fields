import CustomElement from './custom-element'
export default class CustomInputNumber extends CustomElement {
    constructor(el){
        super(el, 'custom-input-number')

        this.build()
        this.bind()
    }

    bind(){
        let step = this.el.getAttribute('step')
        let min = this.el.getAttribute('min')
        let max = this.el.getAttribute('max')

        if(min === null) min = 0
        if(max === null) max = null
        if(step === null) step = 1

        if(step) step = parseFloat(step)

        this.up.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) + step
            if( max !== null && this.el.value > max) this.el.value = max
            this.triggerEvent('input')
            this.triggerEvent('change')
            this.triggerEvent('keyup')
        })
        this.down.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) - step
            if( min !== null && this.el.value < min) this.el.value = min
            this.triggerEvent('input')
            this.triggerEvent('change')
            this.triggerEvent('keydown')
        })
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

    build(){

        this.setStyles({
            position: 'relative',
            overflow: 'hidden',
            cursor: 'text'
        })
        this.setElStyles({
            border: 'none',
            outline: 'none',
            margin: 0,
            marginRight: '-100vw',
            width: 'calc(100% + 100vw)'
        })

        this.controls = document.createElement('div')
        this.controls.className = 'controls'
        this.setStyles({
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }, this.controls)

        this.up = document.createElement('i')
        this.down = document.createElement('i')
        this.up.className = 'up'
        this.down.className = 'down'

        this.setStyles({
            height: '50%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }, this.up)
        this.setStyles({
            height: '50%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }, this.down)

        this.controls.appendChild(this.up)
        this.controls.appendChild(this.down)
        this.container.appendChild(this.controls)
    }

}
