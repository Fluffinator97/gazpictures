import '../Style.css'
import background from '../Pictures/DSCF1198.jpg'

function Banner() {
	return (    
		<div className="App header-banner">
			<header className="App-header">
				<div className="Header-Module img-box flex" style={{backgroundImage: `url(${background})`}}>
				</div>
			</header>
		</div>
	);
}

export default Banner;
