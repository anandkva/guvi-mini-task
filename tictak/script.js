const Game = () => {
  const game = document.getElementById("game");
  const boxes = document.querySelectorAll("li");
  const resetGame = document.getElementById("reset-game");
  const turnDisplay = document.getElementById("whos-turn");
  const gameMessages = document.getElementById("game-messages");
  const playerOneScoreCard = document.getElementById("player-one-score");
  const playerTwoScoreCard = document.getElementById("player-two-score");
  const context = { player1: "x", player2: "o" };
  const board = [];
  const playerOneScore = 0;
  const playerTwoScore = 0;
  let turns;
  let currentContext;
  const init = () => {
    turns = 0;
    currentContext = computeContext();
    board[0] = new Array(3);
    board[1] = new Array(3);
    board[2] = new Array(3);
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", clickHandler, false);
    }
    resetGame.addEventListener("click", resetGameHandler, false);
  };
  const computeContext = () => {
    return turns % 2 == 0 ? context.player1 : context.player2;
  };
  const clickHandler = function() {
    this.removeEventListener("click", clickHandler);
    this.className = currentContext;
    this.innerHTML = currentContext;
    const pos = this.getAttribute("data-pos").split(",");
    board[pos[0]][pos[1]] = computeContext() == "x" ? 1 : 0;
    if (checkStatus()) {
      gameWon();
    }
    turns++;
    currentContext = computeContext();
    turnDisplay.className = currentContext;
  };
  const checkStatus = () => {
    let used_boxes = 0;
    for (let rows = 0; rows < board.length; rows++) {
      let row_total = 0;
      let column_total = 0;
      for (let columns = 0; columns < board[rows].length; columns++) {
        row_total += board[rows][columns];
        column_total += board[columns][rows];
        if (typeof board[rows][columns] !== "undefined") {
          used_boxes++;
        }
      }
      const diagonal_tl_br = board[0][0] + board[1][1] + board[2][2];
      const diagonal_tr_bl = board[0][2] + board[1][1] + board[2][0];
      if (
        diagonal_tl_br == 0 ||
        diagonal_tr_bl == 0 ||
        diagonal_tl_br == 3 ||
        diagonal_tr_bl == 3
      ) {
        return true;
      }
      if (
        row_total == 0 ||
        column_total == 0 ||
        row_total == 3 ||
        column_total == 3
      ) {
        return true;
      }
      if (used_boxes == 9) {
        gameDraw();
      }
    }
  };
  const gameWon = () => {
    clearEvents();
    gameMessages.className = "player-" + computeContext() + "-win";
    switch (computeContext()) {
      case "x":
        playerOneScoreCard.innerHTML = ++playerOneScore;
        break;
      case "o":
        playerTwoScoreCard.innerHTML = ++playerTwoScore;
    }
  };
  const gameDraw = () => {
    gameMessages.className = "draw";
    clearEvents();
  };
  const clearEvents = () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener("click", clickHandler);
    }
  };
  const resetGameHandler = () => {
    clearEvents();
    init();
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].className = "";
      boxes[i].innerHTML = "";
    }
    turnDisplay.className = currentContext;
    gameMessages.className = "";
  };
  game && init();
};
Game();
