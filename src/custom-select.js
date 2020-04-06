import CustomElement from './custom-element'
export default class CustomSelect extends CustomElement {
    constructor(el){
        super(el, 'custom-select')

        this.build()
        this.bind()
    }
    build(){

        this.setElStyles({
            display: 'none'
        })

        this.selected = document.createElement('span')
        this.selected.className = 'selected'
        this.container.appendChild(this.selected)

        this.optionsList = document.createElement('ul')

        let opts = [...this.el.options]
        opts.map(opt => {
            let option = document.createElement('li')
            option.innerHTML = opt.innerHTML
            option.setAttribute('data-value', opt.value)
            this.optionsList.appendChild(option)
            if(opt.selected) this.setSelected(option)
        })
        this.optionsList.className = 'options'
        this.container.appendChild(this.optionsList)

    }

    setSelected(option){
        this.clearSelected()
        this.selected.innerHTML = option.innerHTML
        option.classList.add('selected')
        this.el.value = option.getAttribute('data-value')
        this.triggerChange()
    }

    clearSelected(){
        let options = [...this.optionsList.children]
        options.map(opt => opt.classList.remove('selected'))
        this.el.value = null
    }

    bind(){
        let focusOut = (e)=>{
            if(!this.container.contains(e.target)) {
                this.close()
                window.removeEventListener('click', focusOut)
            }
        }

        let options = [...this.optionsList.children]
        options.map(opt => {
            opt.addEventListener('click', ()=>{
                this.setSelected(opt)
                this.close()
            })
        })

        this.container.addEventListener('click', (e)=>{
            if(this.optionsList.contains(e.target)) return false;
            this.open()
            window.addEventListener('click', focusOut)
        })
    }

    open(){
        this.optionsList.classList.add('active')
    }
    close(){
        this.optionsList.classList.remove('active')
    }

}
