export class Botao extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const bt=document.createElement('button');
        let texto=this.getAttribute('texto');
        let mensagem=this.getAttribute('mensagem');
        bt.innerHTML=texto;
        bt.type='button';
       

        bt.addEventListener('click',()=>{
            alert(mensagem);
        })
        this.appendChild(bt);
    }
}