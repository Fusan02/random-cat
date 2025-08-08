"use server";

import { ValueOf } from "next/dist/shared/lib/constants";

// 画像情報の型定義
type Image = {
  message: string;
};

// APIから画像を取得する
const fetchImage_dog = async (): Promise<Image> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  const images: unknown = await res.json();

  console.log("画像を取得しました", images);
  if (!isImage(images)) {
    throw new Error("取得したデータが正しくありません");
  }

  if (!images) {
    throw new Error("取得したデータが空です");
  }
  return images;
};

const isImage = (value: unknown): value is Image => {
  // valueがオブジェクトであること
  if (typeof value != "object" || value === null) {
    return false;
  }
  // valueにmessageフィールドがあること
  if (!("message" in value)) {
    return false;
  }
  // messageフィールドが文字列であること
  if (typeof (value as Image).message !== "string") {
    return false;
  }
  return true;
};

export default fetchImage_dog;
