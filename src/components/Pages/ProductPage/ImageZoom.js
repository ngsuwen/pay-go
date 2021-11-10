import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

export default function ImageZoom({image}) {
    return (
        <InnerImageZoom
            src={image}
            zoomSrc={image}
            fullscreenOnMobile={false}
            zoomPreload={true}
            width={300}
            hasSpacer={true}
        />
    );
}