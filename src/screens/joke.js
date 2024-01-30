import React from "react";

export default function Joke(props) {
	return (
		<div key={props.id} id='board-entry'>
			<p className='username'>{props.id}</p>
			<img src={props.img} alt='' width='50px' height='50px' />
			<p className='score'>{props.rating}</p>
		</div>
	);
}
