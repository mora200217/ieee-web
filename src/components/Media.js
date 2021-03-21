
import { React }  from 'react'
import 'styles/media.sass'

// logos 
import facebook from 'assets/facebook.svg'
import linkedin from 'assets/linkedin.svg'
import instagram from 'assets/instagram.svg'
import youtube from 'assets/youtube.svg'

export const Media = () => {
	return (
		<div className = "media-container container d-flex flex-column"> 
			<a href=""><img style = {{filter: 'sepia(60%)'}}src={facebook} alt=""/></a>
			<a href=""><img src={linkedin} alt=""/></a>
			<a href=""><img src={instagram} alt=""/></a>
			<a href=""><img src={youtube} alt=""/></a>
		</div>
		) 

}