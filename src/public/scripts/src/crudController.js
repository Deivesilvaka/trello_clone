
class CrudController {
    constructor() {
        this.datas = ""
    }

    static async create(board) {
        const Board = JSON.stringify(board)

        fetch("/createCard", {
            method: "POST",
            body: Board,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(message => message.json())
        .then(response => localStorage.setItem("updated", "YES"))
        .catch(err => console.log(err))
    }

    static async delete(board) {
        const Board = JSON.stringify(board)

        fetch("/deleteCard", {
            method: "POST",
            body: Board,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(message => message.json())
        .then(response => localStorage.setItem("updated", "YES"))
        .catch(err => console.log(err))
    }

    static async createList(newListName) {

        const list = {
            newListName
        }

        const Board = JSON.stringify(list)
        
        fetch("/createList", {
            method: "POST",
            body: Board,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(message => message.json())
        .then(response => localStorage.setItem("updated", "YES"))
        .catch(err => console.log(err))
    }

    static async updateList(newObj) {
        const Board = JSON.stringify(newObj)

        fetch("/updateCard", {
            method: "POST",
            body: Board,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(message => message.json())
        .then(response => localStorage.setItem("updated", "YES"))
        .catch(err => console.log(err))
    }
}

async function callCreate(index) {

    const newCard = prompt("Qual task deseja adicionar ?") || 0

    if(newCard.length > 0){
        const datas = {
            key: index,
            value: newCard
        }
        await CrudController.create(datas)
    }

}

async function callDelete(obj) {
    const newObj = {
        item: obj[0],
        index: obj[1]
    }
    
    const decision = confirm("Tem certeza que deseja excluir este registro?")
    
    if(decision){
        await CrudController.delete(newObj)
    }
}

async function callCreateList() {
    const newList = prompt("Qual o nome da nova lista ?") || ""

    if(newList.length > 0){
        await CrudController.createList(newList)
    }
}

async function callUpdate(data) {
    const newObj = {
        item: data[0],
        index: data[1]
    }

    const newName = prompt("Digite o novo nome: ") || ""

    if(newName.length > 0){
        newObj['newName'] = newName
        await CrudController.updateList(newObj)
    }
}