const { getWidth } = require("jimp");
const rwClient = require ("./twitterClient.js");

async function getFollowers() {
    const followers = await rwClient.v2.followers("1718657726")
    return followers.data.slice(0,5)
}

async function getProfileImageUrl(user_id) {
    const {profile_image_url} = await rwClient.v1.user({user_id})
    return profile_image_url
}

async function updateBanner() {
    await rwClient.v1.updateAccountProfileBanner("./banner.png",{
        width:1500,
        height:500
    })
}

module.exports={getFollowers, getProfileImageUrl, updateBanner}