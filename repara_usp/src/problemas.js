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
	constructor(image, category, description, local, dateSubmitted, upvotes, downvotes, estagio,estado=1){
		this.id = Problema.prototype.counter++;
	
		this.image = image;
		this.category = category;
		this.description = description;
		this.local = local;
		this._dateSubmitted = dateSubmitted;
		this.upvotes = upvotes ? upvotes : 0;
		this.downvotes = downvotes ? downvotes : 0;
		this.estagio = estagio ? estagio : 1;
		this.estado = estado
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


var cano = new Problema('https://www.higitec.com.br/wp-content/uploads/2016/07/como-saber-cano-entupido-quebrado.jpg', 'Vazamento de água', 'O cano está quebrado','Poli-USP',new Date(),3,2,1);

var vidro = new Problema('https://fscomps.fotosearch.com/compc/CSP/CSP691/fundo-com-vidro-quebrado-clipart__k31154780.jpg', 'Estruturas', 'O vidro está quebrado','Poli Usp',new Date(),3,2,1);

var placa = new Problema('http://g1.globo.com/Noticias/SaoPaulo/foto/0,,20799962-EX,00.jpg', "Placas e sinalização", "A placa está caída", "Av. Prof. Luciano Gualberto", new Date(2018, 10, 5, 12, 43, 27, 0), 3, 2,1);


var arvore = new Problema("http://midia.gruposinos.com.br/_midias/jpg/2015/02/06/__rvore-589438.jpg", "Ruas e vias", "Árvore está bloquando a passagem", '', new Date(2018,6,23,18,34,23), 58,9,1);

var buraco = new Problema("http://www.gazetavirtual.com.br/wp-content/uploads/2012/07/Buraco-Pedreira-Carol.jpg", "Ruas e vias", "Buraco na rua", "Rua do Matão", new Date(), 31,8,1);

var vazamento = new Problema("http://compauta.com.br/wp-content/uploads/2015/02/454.jpg", "Vazamento de água", "A torneira está vazando", "Banheiro do IME", new Date(), 27,4,2);

var vaz1_con = new Problema("http://wp.clicrbs.com.br/temsolucao/files/2012/02/1802.jpg","Vazamento de água","Um cano está estourado", "Bloco B, IME", new Date(2018,5,23,12,45,23), 56,3,3);

var vaz2_con =new Problema("https://i.ytimg.com/vi/kJrATQyN0XY/hqdefault.jpg","Vazamento de água","Um cano está estourado", "Poli Biênio", new Date(2018,6,12,18,34,20), 34,1,3);

var vaz3_con = new Problema ("https://assets.almanaquesos.com/wp-content/uploads/2013/02/capa-500x367.jpg","Vazamento de água","Uma torneira está pingando","Prédio de Engenharia elétrica", new Date (2018,3,23,15,22,12),20,3,3);

var vaz4_con = new Problema ("http://www.igorgalves.com.br/wp-content/uploads/2018/01/vazamento-de-agua.jpg","Vazamento de água","Uma cano está estourado","Prédio de Engenharia Civil", new Date (2018,3,15,12,36,12),65,10,3);

var via1_con = new Problema ("http://s2.glbimg.com/0zQb5x3W4BZB0pLQxqXpKmGyXQs=/620x465/s.glbimg.com/jo/g1/f/original/2016/01/07/pitanga2ok.jpg","Ruas e vias","Buraco na via","Na frente da FEA", new Date (2018,6,26,8,5,34), 78,2,3);

var via2_con = new Problema ("https://media.metrolatam.com/2018/01/09/1buracoderua-7ad1b1f07a0d082b57bfed82df3fec0d-1200x600.jpg","Ruas e vias","Buraco na via","Próximo da FFLCH", new Date(2018,7,20,14,14,14),54,10,3);

var est1_con = new Problema ("http://www.forumdaconstrucao.com.br/materias/imagens/01579_02.jpg","Estrutural", "Construção com uma rachadura grande","CEPE-USP", new Date (2018,4,25,13,15,16),67,10,3);

var ele1_con = new Problema ("https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/a82bcc45ce6060ff146070344df6cbfb.jpg", "Problema elétrico", "Curto-circuito","Rádio USP", new Date (2018,5,5,13,13,13), 79,0,3); 

export const problemas = [cano, vidro, placa, arvore, buraco, vazamento, vaz1_con,vaz2_con,vaz3_con,vaz4_con,via1_con,via2_con,est1_con,ele1_con]