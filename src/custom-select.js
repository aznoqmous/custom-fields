import CustomElement from './custom-element'
export default class CustomSelect extends CustomElement {
    constructor(el){
        super(el, 'custom-select')

        this.shiftState = false

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

        let options = [...this.optionsList.children]
        options.map(opt => {
            opt.addEventListener('click', ()=>{
                this.setSelected(opt)
                this.close()
                window.removeEventListener('click', focusOut)
                window.removeEventListener('keyup', keyup)
                window.removeEventListener('keydown', keydown)
            })
        })

        /**
         * Temporary events
         */
        let keyup = (e)=>{

            if(e.key == 'ArrowDown') this.onArrowDown()
            if(e.key == 'ArrowUp') this.onArrowUp()
            if(e.key == 'Enter') {
                this.close()
                window.removeEventListener('click', focusOut)
                window.removeEventListener('keyup', keyup)
                window.removeEventListener('keydown', keydown)
            }
            e.preventDefault()
        }

        let keydown = (e)=>{
            e.preventDefault()
        }

        let focusOut = (e)=>{
            if(!this.container.contains(e.target)) {
                this.close()
                window.removeEventListener('click', focusOut)
                window.removeEventListener('keyup', keyup)
                window.removeEventListener('keydown', keydown)
            }
        }

        this.el.addEventListener('focusin', (e)=>{
            this.open()
            window.addEventListener('click', focusOut)
            window.addEventListener('keyup', keyup)
            window.addEventListener('keydown', keydown)
        })

        this.container.addEventListener('click', (e)=>{
            if(this.optionsList.contains(e.target)) return false;
            this.open()
            window.addEventListener('click', focusOut)
            window.addEventListener('keyup', keyup)
            window.addEventListener('keydown', keydown)
        })

        document.addEventListener('keyup', (e)=>{ if(e.key == 'Shift') this.shiftState = false })
        document.addEventListener('keydown', (e)=>{ if(e.key == 'Shift') this.shiftState = true })
    }

    open(){
        this.optionsList.classList.add('active')
    }

    close(){
        this.optionsList.classList.remove('active')
    }

    onArrowUp(){
        if(this.el.selectedIndex - 1 >= 0) this.setSelected(this.optionsList.children[this.el.selectedIndex - 1])
    }

    onArrowDown(){
        if(this.el.selectedIndex + 1 < this.optionsList.children.length) this.setSelected(this.optionsList.children[this.el.selectedIndex + 1])
    }

}
