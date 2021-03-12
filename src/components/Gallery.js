import React from 'react'
import Carousel from 'react-grid-carousel'
import GalleryItem from './GalleryItem'

const Gallery = () => {
  return (
    <Carousel 
    cols={1} 
    rows={1} 
    gap={0} 
    loop
    autoplay={4000}>
      <Carousel.Item>
        <GalleryItem 
        img="https://picsum.photos/1920/1080?random=1" 
        ctaCopy="Klik Her"
        copy="Køb denne her ting"
        ctaLink="/founders"
        />
      </Carousel.Item>
      <Carousel.Item>
        <GalleryItem 
        img="https://picsum.photos/1920/1080?random=2" 
        ctaCopy="vær med"
        copy="kom med"
        ctaLink="/founders"
        />
      </Carousel.Item>
      <Carousel.Item>
        <GalleryItem 
        img="https://picsum.photos/1920/1080?random=3" 
        ctaCopy="kom med os"
        copy="Join us"
        ctaLink="/founders"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery;