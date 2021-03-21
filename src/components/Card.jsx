// Card jsx 

import { React } from 'react'; 
import "styles/Card.sass"; 

export const Card = ({ name, img }) => {
	return (
		<div className = "card-container">
		<img src= {img} alt=""/>
		<h2> { name } </h2>
		</div>
		)
}