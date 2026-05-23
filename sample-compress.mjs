import sharp from "sharp"
import { statSync } from "fs"

const tasks = [
  {
    src: "C:/Users/Godhyun/Downloads/KakaoTalk_20260523_162148884.jpg",
    out: "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/public/preview_image.png",
    width: 1200,
    height: 1500,
    quality: 90,
    format: "png",
    fit: "contain",
  },
  {
    src: "C:/Users/Godhyun/Downloads/KakaoTalk_20260523_162148884.jpg",
    out: "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/public/preview_og.png",
    width: 1200,
    height: 1500,
    quality: 90,
    format: "png",
    fit: "contain",
  },
]

for (const t of tasks) {
  const origSize = statSync(t.src).size

  let pipeline = sharp(t.src).rotate()

  if (t.height) {
    pipeline = pipeline.resize({
      width: t.width,
      height: t.height,
      fit: t.fit || "cover",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
      withoutEnlargement: false,
    })
  } else {
    pipeline = pipeline.resize({ width: t.width, withoutEnlargement: true })
  }

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
