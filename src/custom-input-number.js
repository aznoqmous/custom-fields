import CustomElement from './custom-element'
export default class CustomInputNumber extends CustomElement {
    constructor(el){
        super(el, 'custom-input-number')

        this.build()
        this.bind()
    }

    bind(){
        let step = parseFloat( this.el.getAttribute('step') ) || 1
        let min = this.el.getAttribute('min')
        let max = this.el.getAttribute('max')

        this.up.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) + step
            if(max !== undefined && this.el.value > max) this.el.value = max
        })
        this.down.addEventListener('click', ()=>{
            this.el.value = parseFloat(this.el.value) - step
            if(min !== undefined && this.el.value < min) this.el.value = min
        })
    }

    build(){

        this.setStyles({
            display: 'inline-block',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'text'
        })
        this.setElStyles({
            border: 'none',
            outline: 'none',
            margin: 0,
            marginRight: '-20px',
            width: 'calc(100% + 20px)'
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
