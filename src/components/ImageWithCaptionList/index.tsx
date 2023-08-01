import React from 'react';
import ImageWithCaption from '../ImageWithCaption';

interface Props {
  images: { src: string; alt: string; caption: string }[];
  className: string;
}

const ImageWithCaptionList: React.FC<Props> = ({ images, ...props }) => {
  return (
    <div className={props?.className}>
      {images.map((image) => (
        <ImageWithCaption
          key={image.src}
          altText={image.alt}
          caption={image.caption}
        />
      ))}
    </div>
  );
};

export default ImageWithCaptionList;
