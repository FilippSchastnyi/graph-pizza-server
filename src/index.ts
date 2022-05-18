import express from 'express'

const app = express()
const PORT = 5000

app.listen(PORT, async () => {
  try {
    await app.get('/', (req, res) => {
      res.send('the-first-start-for-test')
    })
  } catch (e) {
    console.log(e)
  }
})