const goalSchema = require.main.require('./models/goal')

module.exports = async (req, res) => {
  const { id } = req.body

  try {
    await goalSchema.findOneAndRemove({ _id: id })
    res.json({ status: 'success' })
  } catch (error) {
    console.log(error)
  }
}
