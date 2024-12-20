const {Telegraf, Composer} = require('telegraf')
const {
    handleStart,
    handleCats,
} = require('./handlers')

const bot = new Telegraf(process.env.BOT_TOKEN)

const privateMessage = new Composer()
privateMessage.use((ctx, next) => {
  if (ctx.chat && ctx.chat.type === 'private') return next()
  return false
})
bot.use(privateMessage)

privateMessage.command('start', handleStart)
privateMessage.command('cats', handleCats)

bot.launch()