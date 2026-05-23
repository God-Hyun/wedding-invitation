import sharp from "sharp"
import { statSync, readdirSync } from "fs"
import { resolve, join } from "path"

const SRC_DIR = "C:/Users/Godhyun/Desktop/보정본/모청"
const OUT_DIR = "C:/Users/Godhyun/TotalProject/Wedding/wedding-invitation/src/images"

const WIDTH = 1600
const QUALITY = 90

const mapping = [
  { src: "메인.jpg", out: "cover.jpg" },
  ...Array.from({ length: 14 }, (_, i) => ({
    srcCandidates: [`${i + 1}.jpg`, `${i + 1}.JPG`],
    out: `image${i + 1}.jpg`,
  })),
]

const files = readdirSync(SRC_DIR)

let totalOriginal = 0
let totalCompressed = 0

for (const m of mapping) {
  let srcName = m.src
  if (!srcName) {
    srcName = m.srcCandidates.find((c) => files.includes(c))
  }
  if (!srcName) {
    console.log(`SKIP: ${m.out} (source not found)`)
    continue
  }

  const srcPath = join(SRC_DIR, srcName)
  const outPath = resolve(OUT_DIR, m.out)

  const origSize = statSync(srcPath).size
  totalOriginal += origSize

  await sharp(srcPath)
    .rotate()
    .resize({ width: WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(outPath)

  const newSize = statSync(outPath).size
  totalCompressed += newSize
  console.log(
    `${srcName} -> ${m.out}: ${(origSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024).toFixed(0)}KB`,
  )
}

console.log(
  `\n합계: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB -> ${(totalCompressed / 1024 / 1024).toFixed(2)}MB`,
)
