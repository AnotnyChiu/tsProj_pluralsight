var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
var ScoreBorad = (function () {
    function ScoreBorad() {
        this.results = [];
    }
    ScoreBorad.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    ScoreBorad.prototype.updateScoreBoard = function () {
        var output = '<h2>ScoreBoadrd</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.playerName + ": " + result.score + " / " + result.problemCount + " for factor " + result.factor;
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return ScoreBorad;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementId) {
        var inputElement = document.getElementById(elementId);
        return inputElement.value;
    };
    return Utility;
}());
var GameDumb = (function () {
    function GameDumb(newPlayer, numOfProblems, multFactor) {
        this.scoreboard = new ScoreBorad();
        this.player = newPlayer;
        this.problemCount = numOfProblems;
        this.factor = multFactor;
    }
    return GameDumb;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new ScoreBorad();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreBoard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.name = Utility.getInputValue('playername');
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map