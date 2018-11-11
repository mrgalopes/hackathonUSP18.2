
/*placa = {
	id: ,
	image: ,
	category: ,
	description: ,
	dateSubmitted: ,
	upvotes: ,
	downvotes:
};
*/

function Card(){ this._init.apply(this, arguments); }
Card.prototype.counter = 0;
Card.prototype._init = function(image, category, description, local, dateSubmitted, upvotes, downvotes){
	this.id = Card.prototype.counter++;
	
	this.image = image;
	this.category = category;
	this.description = description;
	this.local = local;
	this.dateSubmitted = dateSubmitted;
	this.upvotes = upvotes ? upvotes : 0;
	this.downvotes = downvotes ? downvotes : 0;
}
Card.prototype.set_upvotes = function(upvotes){
	this.upvotes = upvotes;
}
Card.prototype.set_downvotes = function(upvotes){
	this.downvotes = downvotes;
}

placa = new Card("placa.png", "Placas e sinalização", "A placa está torta", "Av. Prof. Luciano Gualberto", new Date(2018, 10, 5, 12, 43, 27, 0), 3, 2);
console.log(placa.upvotes);
console.log(placa.downvotes);
console.log(placa.id);


arvore = new Card("arvore.jpg", "Ruas e vias", "Árvore caiu na rua", "", new Date(), 58);
console.log(arvore.id);

buraco = new Card("buraco.jpg", "Ruas e vias", "", "", new Date(), 31);
console.log(buraco.id);

vazamento = new Card("vazamento.jpg", "Vazamento", "Vazamento na torneira", "", new Date(), 27);
console.log(vazamento.id);



