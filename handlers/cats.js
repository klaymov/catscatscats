const getCatUrl = () => `https://cataas.com/cat?t=${new Date().getTime()}`

module.exports = async (ctx) => {
    await ctx.replyWithPhoto(getCatUrl())
}