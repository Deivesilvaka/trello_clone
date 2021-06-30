
import Board from "./createBoard.js"

async function start() {
    const response = await fetch('/getDatas')
    const board = await response.json()

    await Board.createBoard(board.db)
}

await start()

setInterval(async() => {
    
    if(!localStorage.getItem("updated")){
        localStorage.setItem("updated", "YES")
    }

    if(localStorage.getItem("updated") && localStorage.getItem("updated") === "YES") {
        await start()
        localStorage.setItem("updated", "NO")
    }
}, 200)