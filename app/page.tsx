import CatImage from "./cat-image";
import { connection } from "next/server";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  await connection();
  const image = await fetchImage();
  return <CatImage url={image.url} />;
}
