
import express from 'express'
import cors from 'cors'
import routes from './src/routes.js'
const app = express()

app.use(cors())
app.use(express.static('./src/public'))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log("rodando server"))