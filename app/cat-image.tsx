"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

const CatImage = ({ url }: CatImageProps) => {
  // useStateを使って状態を管理
  const [imageUrl, setImageUrl] = useState(url);

  // 画像を取得する関数を定義
  const refreshImage = async () => {
    setImageUrl(""); // 初期化
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button
        onClick={refreshImage}
        className={`${styles.button} ${styles.button_cat}`}
      >
        他のニャンコも見る
      </button>
      <div className={`${styles.frame} ${styles.frame_cat}`}>
        {imageUrl && <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
};

export default CatImage;
