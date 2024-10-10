
class SliderComponent extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        // this.innerHTML  = `<h1> hello world </h1>`
        this.innerHTML = `<h1>${this.getAttribute(`text`)}</h1>` //  ${} = in these bracits we can type a JavaScript codes
        // this.querySelector(`h1`).innerText = this.getAttribute(`text`)
    }
}

window.customElements.define('slider-components', SliderComponent)