const { saveImage, createBanner } = require("./imageController.js");
const rwClient = require ("./twitterClient.js");
const cronJob = require("cron").CronJob;
const {getFollowers, getProfileImageUrl, updateBanner} = require("./twitterController");

const tweet  = async () => {
    try{
        await rwClient.v2.tweet( "Good Evening")

    } catch(e) {
        console.error(e)

    }
}

const job = new cronJob("55 19 * * *", () => {
    tweet()
})


//job.start();
//tweet();
//getFollowers();


async function generateBanner() {
    const followers = await getFollowers()

    for(const follower of followers) {
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }

    await createBanner()
    await updateBanner()
}

generateBanner()

