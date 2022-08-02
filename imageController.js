const axios = require("axios")
const sharp  = require("sharp")
const jimp = require("jimp")
const fs = require("fs")
const fsPromises = fs.promises


async function saveImage(name, url) {
    const {data} = await axios.get(url,{
        responseType:"arraybuffer"
    })

    await sharp(data).resize(100,100).toFile(`./images/${name}.png`)
}


async function createBanner () {
    const banner = await jimp.read ("./banner.png")
    const files = await fsPromises.readdir("./images")

    let index = 0;

    for(const avatar of files){
        const imgPath =  `./images/${avatar}`
        const image = await jimp.read(imgPath)

        const position = 475+index*(100+10);
        banner.composite(image, position, 380);
        index++;
    }
    await banner.writeAsync("./final.png");

}


module.exports = {saveImage, createBanner}