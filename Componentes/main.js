import {Lista} from './lista.js';
import {Botao} from './botao.js';

window.supportCustomElements="customElements" in window;

window.customElements.define('lista-valor',Lista);

window.customElements.define('btn-mensagem',Botao);

