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

class Problema{
	constructor(image, category, description, local, dateSubmitted, upvotes, downvotes, estagio){
		this.id = Problema.prototype.counter++;
	
		this.image = image;
		this.category = category;
		this.description = description;
		this.local = local;
		this._dateSubmitted = dateSubmitted;
		this.upvotes = upvotes ? upvotes : 0;
		this.downvotes = downvotes ? downvotes : 0;
		this.estagio = estagio ? estagio : 1;
	}
	set_upvotes(upvotes){
		this.upvotes = upvotes;
	}
	set_downvotes(downvotes){
		this.downvotes = downvotes;
	}
	get dateSubmitted(){
		return this._dateSubmitted.toString();
	}
}
Problema.prototype.counter = 1;


var cano = new Problema('https://www.higitec.com.br/wp-content/uploads/2016/07/como-saber-cano-entupido-quebrado.jpg', 'Cano quebrado', 'O cano está quebrado', '', '')

var vidro = new Problema('https://fscomps.fotosearch.com/compc/CSP/CSP691/fundo-com-vidro-quebrado-clipart__k31154780.jpg', 'Vidro quebrado', 'quebrou-se o vidro', '', '')

var placa = new Problema("images/placa.png", "Placas e sinalização", "A placa está torta", "Av. Prof. Luciano Gualberto", new Date(2018, 10, 5, 12, 43, 27, 0), 3, 2);


var arvore = new Problema("images/arvore.jpg", "Ruas e vias", "Árvore caiu na rua", "", new Date(), 58);

var buraco = new Problema("images/buraco.jpg", "Ruas e vias", "", "", new Date(), 31, 2, 2);

var vazamento = new Problema("images/vazamento.jpg", "Vazamento", "Vazamento na torneira", "", new Date(), 27, 3, 3);

export const problemas = [cano, vidro, placa, arvore, buraco, vazamento]