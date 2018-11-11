import React from 'react';

function addVotes(e){
	/*var idee = e.target.id;
	console.log(idee.id)
	var elee = document.getElementById(idee);*/
	var elee = e.target;
	var idee = e.currentTarget.id;
	if(e.target !== e.currentTarget){
		if(elee.className === "upvotes"){
			if(document.getElementById("up"+idee).className !== "saturated"){
				document.getElementById("up"+idee).textContent = parseInt(document.getElementById("up"+idee).textContent)+1;
				document.getElementById("up"+idee).className = "saturated";
			}
			if(document.getElementById("down"+idee).className === "saturated"){
				document.getElementById("down"+idee).textContent = parseInt(document.getElementById("down"+idee).textContent)-1;
				document.getElementById("down"+idee).className = "";
			}
		}
		else if(elee.className === "downvotes"){
			if(document.getElementById("down"+idee).className !== "saturated"){
				document.getElementById("down"+idee).textContent = parseInt(document.getElementById("down"+idee).textContent)+1;
				document.getElementById("down"+idee).className = "saturated";
			}
			if(document.getElementById("up"+idee).className === "saturated"){
				document.getElementById("up"+idee).textContent = parseInt(document.getElementById("up"+idee).textContent)-1;
				document.getElementById("up"+idee).className = "";
			}
		}
	}
}

const Card = ({id, image, category, description, local, dateSubmitted, upvotes, downvotes}) => {
	return (
		<div className='grow ba br2 pa2 ma2 mh2 dib shadow-5 cardWrap'>
			<div className='fl w-third pa2 br'>
				<img alt='Problem' src={image} />
			</div>
			<div className='fl w-two-thirds pa2 tl '>
				<div>
					<h2>{category}</h2>
					<p>{description}</p>
					<p>{dateSubmitted}</p>
					<p>{local}</p>
				</div>
				<div className="votes" id={"votes"+id} onClick={addVotes}>
					<button onClick={addVotes} className="upvotes">Útil <span id={"upvotes"+id}>{upvotes}</span></button>
					<button onClick={addVotes} className="downvotes">Inútil <span id={"downvotes"+id}>{downvotes}</span></button>
				</div>
			</div>
		</div>
	)
}

export default Card