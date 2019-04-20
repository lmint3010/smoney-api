const historyModel = require.main.require('./models/history')

module.exports = async (req, res) => {
  const { _id } = req.body

  try {
    const updateHistory = await historyModel.find({ user: _id, status: 0 })
    res.json(updateHistory)
  } catch (error) {
    console.log(error)
  }
}
