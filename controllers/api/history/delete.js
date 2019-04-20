const historyModel = require.main.require('./models/history')

module.exports = async (req, res) => {
  const { id } = req.body

  await historyModel.findOneAndRemove({ _id: id })
  res.json({ status: 'success' })
}
