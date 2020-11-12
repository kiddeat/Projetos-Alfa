export class Lista extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        const ul=document.createElement('ul');
        let props= this.getAttribute('lista').split(',');
        console.log(props);
        props.map((f)=>{

            let template =`<li>${f}</li>`;
        
            ul.innerHTML+= template;

        })
        
        this.appendChild(ul);
    }
}