import app from './app'
import config from './config/config'

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

// const privateKey = fs.readFileSync('privatekey.pem')
// const certificate = fs.readFileSync('certificate.pem')
// https
//   .createServer({ key: privateKey, cert: certificate }, app)
//   .listen(config.port)
