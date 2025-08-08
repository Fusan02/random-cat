import CatImage from "./cat-image";
import DogImage from "./dog-image";
import { connection } from "next/server";
import { fetchImage } from "./fetch-image";
import fetchImage_dog from "./fetch-image_dog";
import styles from "./page.module.css";

export default async function Home() {
  await connection();
  const image = await fetchImage();
  const dogimage = await fetchImage_dog();
  return (
    <div className={styles.container}>
      <CatImage url={image.url} />
      <DogImage url={dogimage.message} />
    </div>
  );
}
