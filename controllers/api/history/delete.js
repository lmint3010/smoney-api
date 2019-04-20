const historyModel = require.main.require('./models/history')

module.exports = async (req, res) => {
  const { id } = req.body

  try {
    await historyModel.findOneAndRemove({ _id: id })
    res.json({ status: 'success' })
  } catch (error) {
    console.log(error)
  }
}
