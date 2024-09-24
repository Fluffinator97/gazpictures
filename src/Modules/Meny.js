import '../Style.css'
import insta from '../Pictures/Instagram_icon.png'

function Meny() {
	return (    
		<header className="meny">
			<div className="flex">
				<div className="center w100"><h3 className="menuTitle" >Gaz Pictures</h3></div>
				<div className="padding-right pAbsolute flex">
					<img src={insta} className="icon" alt="instagram logo" />
				</div>
			</div>
		</header>
	);
}

export default Meny;
