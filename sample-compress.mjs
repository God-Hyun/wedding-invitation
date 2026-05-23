import sharp from "sharp"
import { statSync } from "fs"

const tasks = [
  {
    src: "C:/Users/Godhyun/Downloads/KakaoTalk_20260523_162148884.jpg",
    out: "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/public/preview_image.png",
    width: 1200,
    quality: 90,
    format: "png",
  },
  {
    src: "C:/Users/Godhyun/Downloads/KakaoTalk_20260523_162148884.jpg",
    out: "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/public/preview_og.png",
    width: 1200,
    quality: 90,
    format: "png",
  },
  {
    src: "C:/Users/Godhyun/Desktop/보정본/모청/DSC09991 0_1.JPG",
    out: "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/src/images/image11.jpg",
    width: 1600,
    quality: 90,
    format: "jpeg",
  },
]

for (const t of tasks) {
  const origSize = statSync(t.src).size

  const pipeline = sharp(t.src)
    .rotate()
    .resize({ width: t.width, withoutEnlargement: true })

  if (t.format === "jpeg") {
    await pipeline.jpeg({ quality: t.quality, mozjpeg: true }).toFile(t.out)
  } else {
    await pipeline.png({ quality: t.quality, compressionLevel: 9 }).toFile(t.out)
  }

  const newSize = statSync(t.out).size
  console.log(
    `${t.src.split("/").pop()} -> ${t.out.split("/").pop()}: ${(origSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024).toFixed(0)}KB`,
  )
}
