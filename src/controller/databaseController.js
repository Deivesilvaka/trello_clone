
import State from "./dataBaseRobot.js"

export default class DataBase {
    static async getDatas(req, res) {
        const datas = await State.loadDB()
        res.json(datas)
    }

    static async createData(req, res) {
        const { key, value } = req.body

        const board = await State.loadDB()
        board["db"][key].activities.push(value)

        res.json(await State.saveDB(board))
    }

    static async deleteData(req, res) {
        const { item, index } = req.body

        const board = await State.loadDB()

        if(index !== "A"){
            board['db'][item].activities.splice(index, 1)
        } else {
            board['db'].splice(item, 1)
        }

        res.json(await State.saveDB(board))
    }

    static async createList(req, res) {
        const { newListName } = req.body

        const board = await State.loadDB()

        board['db'].push({
            title: newListName,
            activities: []
        })

        res.json(await State.saveDB(board))
    }

    static async updateCard(req, res) {

        const { item, index, newName } = req.body

        const board = await State.loadDB()

        if(index !== "A"){
            board['db'][item].activities[index] = newName
        } else {
            board['db'][item].title = newName
        }

        res.json(await State.saveDB(board))
    }
}