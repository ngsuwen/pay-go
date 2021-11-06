import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel() {
    return (
        <div style={{maxWidth:1200, margin:'auto'}}>
            <div style={{ maxWidth: 750 }}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={48}
                    totalSlides={3}
                    isPlaying={true}
                    interval={2500}
                >
                    <Slider>
                        <Slide index={0}><img src='https://www.muji.com/sg/feature/anniversary/2021/contents/uploads/main-7-768x384.jpg'/></Slide>
                        <Slide index={1}><img src='https://www.muji.com/sg/feature/anniversary/2021/contents/uploads/main-4-768x432.jpg'/></Slide>
                        <Slide index={2}><img src='https://www.muji.com/sg/feature/anniversary/2021/contents/uploads/main-5-768x366.jpg'/></Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    );
}