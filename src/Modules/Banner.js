import '../Style.css'
import insta from '../Logo/whiteInstaLogo.png'
import background from '../Pictures/DSCF2623.jpg'
import profile from '../Pictures/A7404066.jpg'

function Banner() {
	return (    
		<div className="App header-banner">
			<header className="App-header">
				<div className="Header-Module img-box flex banner" style={{backgroundImage: `url(${background})`}}>
					<div className="about">
					<div className="center"><h3 className="menuTitle" >What can I say? I'm shooter born in heaven.</h3></div>
						<p>I’m Harvey Holmes but most people know me as Gaz. A 22 year old from Portsmouth with a deep passion for photography.</p>

						<p>I was first inspired to pick up a camera when my father passed away in 2019. He was a hobbyist photographer with an eye for precise detail; I guess it runs in the family.</p>
						<p>Self taught, extremely passionate about my work and driven; I’m now dipping my toe into the professional world of photography.</p>
						<p>I’ll be there to capture your special moments or produce images for your marketing campaign. Whether you need me to capture memories of a family occasion, take headshots of your employees or require professional product photography, I’ll be with you every step of the way. I look forward to working with you.</p>

    <p>- Harvey “Gaz” Holmes</p>
					</div>

					<div className="contact flex">
						<div className="flex-col fit-content contact-info">
							<div className="">
							<h3 class="">Contact</h3>
							<div class="">
								<div class="flex">
									<p>E-mail: harvey.dj.holmes@gmail.com</p>
								</div>
								<div class="flex">
									<p>Phone: 07828851232</p>
								</div>
							</div>

							<div class="">
								<p>Socials :</p>
								<div class="">
									<a href="https://www.instagram.com/gazpictures/" target="_blank" rel="noreferrer">
										<img src={insta} className="icon" alt="instagram logo" />
									</a>
								</div>
							</div>
							</div>
						</div>
						<div className="flex-col width100">
							<div className="">
								<img className="profile-picture" src={profile} alt="Absolute spoon" />
							</div>
						</div>
        </div>
              </div>
			</header>
		</div>
	);
}

export default Banner;
