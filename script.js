//Константа в которую помещается класс из HTML
const cards = Array.from(document.querySelectorAll(".card"))

// В константу положены все возможные выиграшные комбинации.
const winner = [[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7],
[1,4,7], [2,5,8], [3,6,9]]

//  В переменную добавлено количество играков(2) count - кол-во ходов.
let firstPlayer = [], secondPlayer = [], count = 0

function check (array)
{
    let finalResult = false
    for(let item of winner)
    {
        let res = item.every(val => array.indexOf(val) !== -1)
        if(res)
        {
            finalResult = true
            break
        }
    }
    return finalResult
}



function winnerPlayer(p) 
{
    const model = document.createElement("div")
    const player = document.createTextNode(p)
    const button = document.createElement("button")

    model.classList.add("winner")
    model.appendChild(player)
    button.appendChild(document.createTextNode("Replay"))

    button.onclick = function() { rep() }
    model.appendChild(button)
    document.body.appendChild(model)
}

function draw()
{
    if(this.classList == "card")
    {
        count++
        if(count%2 !== 0)
        {
            this.classList.add("x")
            firstPlayer.push(Number(this.dataset.index))
            if(check(firstPlayer))
            {
                winnerPlayer("You Are WINNER!!!")
            }
        } else
        {
            this.classList.add("o")
            secondPlayer.push(Number(this.dataset.index))
            if(check(secondPlayer))
            {
                winnerPlayer("You WINNER!!!")
            }
        }
        if(count === 9)
        {
            winnerPlayer("DRAW")
        }
    }
}

function rep() 
{
    const w = document.querySelector(".winner")
    //cards.forEach(card => card.classList = "card")
    firstPlayer = []
    secondPlayer = []
    count = 0
    w.remove()
}
cards.forEach(card => card.addEventListener("click", draw))

const model = document.createElement("div")
console.log(model)