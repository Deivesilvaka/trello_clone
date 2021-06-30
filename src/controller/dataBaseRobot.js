
import path from 'path'
import fs from 'fs'

export default class State {
    static async loadDB() {
        const database = JSON.parse(fs.readFileSync(path.join(fs.realpathSync('.'), "src", "db", "base.json"), "utf-8"))
        return database
    }

    static async saveDB(datas) {
        const newDatas = JSON.stringify(datas, null, 2)
        fs.writeFileSync(path.join(fs.realpathSync('.'), "src", "db", "base.json"), newDatas)

        return JSON.parse(newDatas)
    }
}