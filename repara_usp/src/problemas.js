/*export const problemas = [
	{
		id: 1,
		image: 'https://www.higitec.com.br/wp-content/uploads/2016/07/como-saber-cano-entupido-quebrado.jpg',
		category: 'Cano quebrado',
		description: 'O cano está quebrado'
	},
	{
		id: 2,
		image: 'https://fscomps.fotosearch.com/compc/CSP/CSP691/fundo-com-vidro-quebrado-clipart__k31154780.jpg',
		category: 'Vidro quebrado',
		description: 'quebrou-se o vidro'
	}
]*/
// https://wallpaperbrowse.com/media/images/750814.jpg
import React from 'react';
import iplaca from './images/placa.png';


function Problema(){ this._init.apply(this, arguments); }
Problema.prototype.counter = 1;
Problema.prototype._init = function(image, category, description, local, dateSubmitted, upvotes, downvotes){
	this.id = Problema.prototype.counter++;
	
	this.image = image;
	this.category = category;
	this.description = description;
	this.local = local;
	this.dateSubmitted = dateSubmitted;
	this.upvotes = upvotes ? upvotes : 0;
	this.downvotes = downvotes ? downvotes : 0;
}
Problema.prototype.set_upvotes = function(upvotes){
	this.upvotes = upvotes;
}
Problema.prototype.set_downvotes = function(downvotes){
	this.downvotes = downvotes;
}

var cano = new Problema('https://www.higitec.com.br/wp-content/uploads/2016/07/como-saber-cano-entupido-quebrado.jpg', 'Cano quebrado', 'O cano está quebrado',"Bloco B, IME", "11/11/2018", 32,0)

var vidro = new Problema('https://fscomps.fotosearch.com/compc/CSP/CSP691/fundo-com-vidro-quebrado-clipart__k31154780.jpg', 'Vidro quebrado', 'quebrou-se o vidro')

var placa = new Problema(<img src={iplaca}/>, "Placas e sinalização", "A placa está torta", "Av. Prof. Luciano Gualberto", new Date(2018, 10, 5, 12, 43, 27, 0), 3, 2);
/*console.log(placa.upvotes);
console.log(placa.downvotes);
console.log(placa.id);*/


var arvore = new Problema("images/arvore.jpg", "Ruas e vias", "Árvore caiu na rua", "", new Date(), 58);

var buraco = new Problema("images/buraco.jpg", "Ruas e vias", "", "", new Date(), 31);

var vazamento = new Problema("images/vazamento.jpg", "Vazamento", "Vazamento na torneira", "", new Date(), 27);

export const problemas = [cano, vidro, placa, arvore, buraco, vazamento]