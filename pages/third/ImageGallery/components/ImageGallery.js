// components/ImageGallery.js

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const images = [
  "https://placeholder.com/300/200",
  "https://placeholder.com/301/200",
  "https://placeholder.com/302/200",
  "https://placeholder.com/303/200",
];

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ThumbnailImage = styled(motion.img)`
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid transparent;
  &:hover {
    border-color: #3498db;
  }
`;

const LargeImage = styled(motion.img)`
  width: 300px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
`;

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <GalleryWrapper>
      <LargeImage
        key={selectedImage}
        src={selectedImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Thumbnails>
        {images.map((img, index) => (
          <ThumbnailImage
            key={index}
            src={img}
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </Thumbnails>
    </GalleryWrapper>
  );
}
