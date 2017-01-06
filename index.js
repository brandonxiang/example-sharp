var sharp = require('sharp')

const width = 2000;
const height = 2000;
const channels = 4;
const rgbaPixel = 0x00000000;

const canvas = Buffer.alloc(width * height * channels, rgbaPixel);

sharp(canvas, { raw : { width, height, channels } })
.overlayWith('IMG_0005.PNG',{top:200,left:200})
.toFile('output.png',function(err,info){
    console.log(err);
    console.log(info);
})