"use client";

import { useState } from "react";
import fetchImage_dog from "./fetch-image_dog";
import styles from "./page.module.css";

type DogImageProps = {
  url: string;
};

const DogImage = ({ url }: DogImageProps) => {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage_dog();
    setImageUrl(image.message);
  };

  return (
    <div className={styles.page}>
      <button
        onClick={refreshImage}
        className={`${styles.button} ${styles.button_dog}`}
      >
        他のわんちゃんも見る
      </button>
      <div className={`${styles.frame} ${styles.frame_dog}`}>
        {imageUrl && <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
};

export default DogImage;
