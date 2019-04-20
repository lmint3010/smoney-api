const index = (_, res) => {
  res.json({ status: 'API WORKED' })
}

module.exports = app => {
  app.use('/api/status', index)
}
