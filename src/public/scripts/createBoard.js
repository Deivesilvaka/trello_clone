

export default class Board {

    static async createTopic(datas) {

        let html = ""

        await datas.map(async (item, index) => {
            const items = await Board.createItems(item, index)
            const string = `${index}A`
            html += `<div id="topic">
                <h3><m onclick="callUpdate('${string}')">${item.title}</m> <w onclick="callDelete('${string}')"><img src="../img/trash.png" width="13px" height="13px"></w></h3>
                <div id="items">${items}</div>
            </div>`
        })

        html += `<div id="topic">
            <div id="buttonItem"><p><button onclick="callCreateList()" > + adicionar lista</button></p><br></div>
        </div>`

        return html.replaceAll(",", "")
    }

    static async createItems(Item, Index) {
        let html = Item.activities.map((item, index) => {
            const string = `${Index}${index}`
            return `<div id="item"><p><m onclick="callUpdate('${string}')">${item}</m><w onclick="callDelete('${string}')"><img src="../img/trash.png" width="13px" height="13px"></w></p><br></div>`
        })
        
        html.push(`<div id="buttonItem"><p><button onclick="callCreate('${Index}')" > + adicionar outro cartão</button></p><br></div>`)

        return html
    }

    static async createBoard(datas) {
        const board = await Board.createTopic(datas)
        document.querySelector("#container").innerHTML = board
    }
}