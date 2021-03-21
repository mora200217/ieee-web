// Chapter js 
import { React, useState } from 'react'; 
import 'styles/Chapter.sass'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import facebook from 'assets/facebook.svg'; 
import aess from 'assets/aess.png'; 

export const  Chapter = () => {
	const [N, setN_] = useState(3); 
	const [n, setN] = useState(0); 
	const [img, setImg] = useState(''); 

	const [title, setTitle] = useState('AESS')
	const [subtitle, setSubtitle] = useState('Aerospace and Electronics Systmems Society')
	const [description, setDescription] = useState('La grandeza del universo, se explora en cada paso de creatividad. Aprende A conocer lo que te observa desde lo alto. La grandeza del universo, se explora en cada paso de creatividad. Aprende A conocer lo que te observa desde lo alto')

	const chaptersList = ['AESS', 'APS', 'RAS']

	/*
		next 
		Se invoca con el click de Siguiente. Se encarga 
		de cambiar al siguiente cápitulo en el carrusel. 
	*/ 
	const next = () => {
		let i = (n + 1)% N; 
		setN(i); 
		setTitle(chaptersList[i]); 
	}

	/*
		Prev 
		Se invoca con el click de Anterior. Se encarga 
		de cambiar al anterior cápitulo en el carrusel. 
	*/ 
	const prev = () => {
		let i = (n - 1) % N < 0 ? N - 1 : (n - 1) % N;  
		setN(i); 
		setTitle(chaptersList[i]); 
	}


	return (
		<>			
			<div className = "d-flex flex-column"> 
				<div className = "chapter-container px-4 py-3">
					<Row className = "p-absolute top-title py-3 ml-5 mt-3 justify-content-between">
						<Col>Capitulos</Col>
						<Col className = "d-flex flex-colum justify-content-center">
							face
						</Col>
					</Row> 

					<div className = "chapter-info mt-2"> 
						<h1>  {title} </h1>
						<h2>  {subtitle} </h2>
						<p> {description} </p> 
					</div>
					<div className = "btn-movement px-5">
						<div className = "d-flex ml-4 btn-container">
							<button onClick = { prev }> Anterior </button>
							<button onClick = { next } className = "ml-3">Siguiente</button>
						</div>
					</div>
				</div>
				
			</div>

			<img className = "chapter-img" src={ aess } alt=""/>
		</>
		)

	}