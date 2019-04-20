const goalSchema = require.main.require('./models/goal')

module.exports = async (req, res) => {
  const {
    user: { _id },
    body: { title, duration, milestone, isCompoleted },
  } = req

  const newGoal = new goalSchema({
    user: _id,
    title,
    duration,
    milestone,
    isCompoleted,
  })

  try {
    const goalSaved = newGoal.save()
    res.json(goalSaved)
  } catch (error) {
    console.log(error)
  }
}
