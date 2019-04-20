const goalSchema = require.main.require('./models/goal')

module.exports = async (req, res) => {
  const { title, duration, milestone, isCompoleted } = req.body

  try {
    const updateGoal = await goalSchema.findOneAndUpdate(
      { _id: id },
      { title, duration, milestone, isCompoleted }
    )
    res.json(updateGoal)
  } catch (error) {
    console.log(error)
  }
}
