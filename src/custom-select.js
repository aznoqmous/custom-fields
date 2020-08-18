import CustomElement from './custom-element'
export default class CustomSelect extends CustomElement {
    constructor(el){
        super(el, 'custom-select')

        this.delay = 100

        this.build()
        this.bind()
    }

    build(){

        this.selected = document.createElement('span')
        this.selected.className = 'selected'
        this.container.appendChild(this.selected)

        this.optionsList = document.createElement('ul')

        let opts = [...this.el.options]
        opts.map(opt => {
            let option = document.createElement('li')
            option.innerHTML = opt.innerHTML
            option.setAttribute('data-value', opt.getAttribute('value'))
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
        this.el.value = option.getAttribute('data-value') ? option.getAttribute('data-value') : null;
        this.triggerChange()
    }

    clearSelected(){
        let options = [...this.optionsList.children]
        options.map(opt => opt.classList.remove('selected'))
        this.el.value = null
    }

    bind(){

        /**
        * Temporary events
        */
        this.keyup = (e)=>{
            if(e.key == 'ArrowDown') this.onArrowDown()
            if(e.key == 'ArrowUp') this.onArrowUp()
            if(e.key == 'Enter') {
                if(this.opened && Date.now() - this.opened  > this.delay) this.close()
                else this.open()
            }
            e.preventDefault()
        }

        this.focusout = (e)=>{
            if(!this.container.contains(e.target)) {
                this.close()
            }
        }
        this.keydown = (e)=>{
            if(e.key == 'Tab') this.close()
            else e.preventDefault()
        }

        let options = [...this.optionsList.children]
        options.map(opt => {
            opt.addEventListener('click', ()=>{
                this.setSelected(opt)
                this.close()
            })
        })

        this.el.addEventListener('focusin', (e)=>{
            this.open()
        })

        this.container.addEventListener('click', (e)=>{
            if(this.optionsList.contains(e.target)) return false;
            this.open()
        })

        this.el.addEventListener('keydown', (e)=>{
            if(!this.opened && e.key == 'Enter') {
                setTimeout(()=>{this.open()}, 0)
                e.preventDefault()
            }
        })
    }

    open(){
        this.opened = Date.now()
        this.optionsList.classList.add('active')
        window.addEventListener('click', this.focusOut)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
    }

    close(){
        this.opened = false
        this.optionsList.classList.remove('active')
        window.removeEventListener('click', this.focusOut)
        window.removeEventListener('keyup', this.keyup)
        window.removeEventListener('keydown', this.keydown)
    }

    onArrowUp(){
        if(this.el.selectedIndex - 1 >= 0) this.setSelected(this.optionsList.children[this.el.selectedIndex - 1])
        else this.close()
    }

    onArrowDown(){
        if(this.el.selectedIndex < 0) this.setSelected(this.optionsList.children[1])
        else if(this.el.selectedIndex + 1 < this.optionsList.children.length) this.setSelected(this.optionsList.children[this.el.selectedIndex + 1])
    }

}
