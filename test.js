const sharp = require("sharp");
const fs = require("fs");

const image = fs.readFileSync(process.argv[2]);
(async () => {
  console.log("Input image metadata", await sharp(image).metadata());
  const newImage = await sharp(image)
    .resize(50, 50, { fit: sharp.fit.inside })
    .toBuffer();
  console.log("Output image metadata", await sharp(newImage).metadata());
})();
