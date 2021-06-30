
import Board from "./createBoard.js"
let tamanho = 0

async function start() {
    const response = await fetch('/getDatas')
    const board = await response.json()

    tamanho = board.db.length

    await Board.createBoard(board.db)
}

await start()

setInterval(async() => {

    console.log(tamanho)

    document.querySelector("#container").style.width = tamanho < 5 ? `${5 * 250}px` : `${tamanho * 250}px`
    
    if(!localStorage.getItem("updated")){
        localStorage.setItem("updated", "YES")
    }

    if(localStorage.getItem("updated") && localStorage.getItem("updated") === "YES") {
        await start()
        localStorage.setItem("updated", "NO")
    }
}, 200)