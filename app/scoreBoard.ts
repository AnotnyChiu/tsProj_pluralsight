/// <reference path="result.ts" />

class ScoreBorad {
    private results: Result[] = []

    addResult(newResult: Result): void {
        this.results.push(newResult)
    }

    updateScoreBoard(): void {
        let output: string = '<h2>ScoreBoadrd</h2>'

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index]
            output += '<h4>'
            output += `${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}`
            output += '</h4>'
        }

        const scoresElement: HTMLElement = document.getElementById('scores')!
        scoresElement.innerHTML = output
    }
}