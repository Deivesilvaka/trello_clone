
import Router from 'express'
import path from 'path'
import { realpathSync } from 'fs'
import DataBase from './controller/databaseController.js'

const routes = Router()

routes.get("/", (req, res) => {
    res.sendFile(path.join(realpathSync("."), "src", "public", "index.html"))
})

routes.post("/createCard", DataBase.createData)
routes.post("/deleteCard", DataBase.deleteData)
routes.post("/createList", DataBase.createList)
routes.post("/updateCard", DataBase.updateCard)

routes.get("/getDatas", DataBase.getDatas)

export default routes