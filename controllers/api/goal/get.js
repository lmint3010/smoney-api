const goalSchema = require.main.require('./models/goal')

module.exports = (req, res) => {
  const { _id } = req.user
  const { page } = req.query
  let currentPage = 1
  const perPage = 50

  if (page) {
    currentPage = page
  }

  try {
    goalSchema
      .find({ user: _id, status: 0 })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(function(err, rs) {
        goalSchema.countDocuments().exec(function(err, count) {
          if (err) return res.json(err)
          let result = {
            data: rs,
            page: currentPage,
            totalPage: Math.ceil(count / perPage),
            limit: perPage
          }
          return err ? res.status(500).json(err) : res.json(result)
        })
      })
  } catch (error) {
    console.log(error)
  }
}
