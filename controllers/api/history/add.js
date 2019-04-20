const historyModel = require.main.require('./models/history')

module.exports = async (req, res) => {
  const {
    user: { _id },
    body: { date, title, money, status },
  } = req

  const newHistory = new historyModel({
    user: _id,
    date,
    title,
    money,
    status
  })
  const historySaved = await newHistory.save()
  res.json(historySaved)
}
