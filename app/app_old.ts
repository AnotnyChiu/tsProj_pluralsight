/// <reference path="player.ts" />
/// <reference path="utility.ts" />




// plain js is also valid ts!

function startGame(){
    
    let playerName: string | undefined = Utility.getInputValue('playername') // access static metho
    logPlayer(playerName)
    
    postScore(80, playerName)
    postScore(-5, playerName)
}

// set default value，then if null or undefined is passed, it still can run with default value
function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New Game starting for player ${name}`)
}



function postScore(score: number, playerName:string = 'MultiMath Player'): void {

    //function type
    let logger: (value: string) => void

    if (score < 0){
        logger = logError
    }
    else{
        logger = logMessage
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScore')
    scoreElement!.innerText = `${score} - ${playerName}` // ! not null assertion operator
    // scoreElement?.innerText = `${score} - ${plaayerName}`  ? can be null assertion operator

    logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)

const logMessage = (message: string): void => console.log(message)
// once again oneline in arrow function don't need curl bracket

function logError(err: string): void {
    console.error(err)
}

const firstPlayer: Player = new Player()
firstPlayer.name = 'Elvin'
console.log(firstPlayer.formatName())
