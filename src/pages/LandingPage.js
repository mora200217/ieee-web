/*
	Landing Page v0.1 (20-03-2020)
	Página principal de la aplicación. Contiene toda 
	la información del a rama. 
*/ 

import { React } from 'react'; 
import 'styles/LandingPage.sass'; 
import Button from 'react-bootstrap/Button';

import Owl from 'assets/Buho.svg'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { NavBar } from 'components/NavBar.js'; 
import { Media } from 'components/Media.js'; 
import { Card } from 'components/Card'; 

export const LandingPage = () => {

	/*
	*/ 
	const getCards = () => {
			let values = ["Crea", "Construye", "Idea"]; 
			values = values.map(e => (<Card name = {e}/>) ); 
			return values; 
	}

	return (
		<>

		<NavBar /> 
		<Media/>
		{/* Imagen principal */}
		<section className = "section-1"> 
			{/* Nav bar*/}
          <Row className = "container center"> 
          <Col >
          	<div className = "title"> Ingenia tu camino </div>
          	<Row> 
          		<h3 className = "ml-4 ver-mas">Ver mas</h3> 
          	</Row>
          	</Col>

          	<Col>
          		<img className = "owl" src={Owl} alt=""/>
          	</Col>
          </Row> 
		
		</section>
		<section className = "section-2">
			<div className = "section-extension-1"/>
			<div className = "section-extension-2"/>

			{/* Card */}

			<div className = "cards-container d-flex align-items-center align-self-center justify-content-center d-column">
			{ getCards()}
			</div>
		</section>
			
		</>
	); 
}


