import React from 'react'
import "./GalleryItem.scss"

function GalleryItem({img, copy, ctaLink, ctaCopy}) {
  return(
            <div className="galleryItem">
              <img src={img} alt="" className="galleryItem__image"/>
              <div className="galleryItem__content">
                <p className="galleryItem__copy">{copy}</p>
                <a href={ctaLink} className="galleryItem__CTA" 
                // eslint-disable-next-line
                onClick={gtag("event", "select_content", { "content_type": ctaLink })}
                >{ctaCopy}</a>
              </div>
            </div>
    
  );
}

export default GalleryItem
