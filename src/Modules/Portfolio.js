import '../Style.css';
import '../imgModal.css';

import { useState } from 'react';

const images = require.context('../photos', true);
const imageList = images.keys().map(image => images(image));
function Portfolio(props) {


const images = require.context('../photos', true);
const imageList = images.keys().map(image => images(image));
const [imageToShow, setImageToShow] = useState("");
const [lightboxDisplay, setLightBoxDisplay] = useState(false);



const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
	document.body.classList.add("remove-scrolling"); 
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
	document.body.classList.remove("remove-scrolling"); 
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = imageList.indexOf(imageToShow);
    if (currentIndex >= imageList.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageList[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };


  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = imageList.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imageList[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

return (
	<div className="" id="images-wrapper">
		{imageList.map((image, index) => (
				<img key={index} src={image} onClick={() => showImage(image)} sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw" width="30%" className="flex-auto image-card" alt={`image-${index}`} />
			))}
	{
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button className="lightboxButton" onClick={showPrev}>&lt;</button>
          <img id="lightbox-img" src={imageToShow} alt="a"></img>
          <button className="lightboxButton" onClick={showNext}>&gt;</button>
        </div>
       : ""
      }
	</div>
);
}

export default Portfolio;
