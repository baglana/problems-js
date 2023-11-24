import Bot from "./Bot.ts";
import Piece from "../types/Piece.ts";

class Team3Bot extends Bot {
  #botWinList: Piece[];
  #userWinList: Piece[];

  constructor() {
    super("Team3 bot", "/team3.jpg");
    this.#botWinList = [];
    this.#userWinList = [];
  }

  move(board: Piece[], ownPiece: Piece): number {
    console.log(board, ownPiece);

    const userPiece: Piece = ownPiece === "x" ? "o" : "x";

    let len = board.filter(Boolean).length; // number of used cells
    let boardCellInd = this.getBoardCellInd(board, ownPiece, userPiece, len);

    if (boardCellInd !== false) {
      return boardCellInd;
    } else {
      boardCellInd = this.captureCenterOrCorner(board);
      if (boardCellInd) {
        return boardCellInd;
      } else {
        while (len < 9) {
          let randomCellInd = Math.floor(Math.random() * 9);
          if (!board[randomCellInd]) {
            return randomCellInd;
          }
        } // while
      }
    }
    return 0;
  }

  areEqual(one: Piece, two: Piece) {
    if (one === two) return one;
    return false;
  }

  checkEquality(
    currentPlayer: Piece,
    array: number[][],
    list: Piece[],
  ): false | [number, number] {
    for (const item of array) {
      const a = list[item[0]];
      const b = list[item[1]];
      if (this.areEqual(a, b) == currentPlayer) {
        return [item[0], item[1]];
      }
    }
    return false;
  }

  isWin(player: Piece, list: Piece[]) {
    let val: [number, number] | boolean = false;
    if (list[0] == player) {
      val = this.checkEquality(
        player,
        [
          [1, 2],
          [3, 6],
          [4, 8],
        ],
        list,
      );
      if (val) return true;
    }

    if (list[8] == player) {
      val = this.checkEquality(
        player,
        [
          [2, 5],
          [6, 7],
        ],
        list,
      );
      if (val) return true;
    }

    if (list[4] == player) {
      val = this.checkEquality(
        player,
        [
          [1, 7],
          [3, 5],
          [2, 6],
        ],
        list,
      );
      if (val) return true;
    }

    return val;
  }

  captureCenterOrCorner(board: Piece[]) {
    if (!board[4]) {
      return 4;
    } else if (!board[2]) {
      return 2;
    } else if (!board[6]) {
      return 6;
    } else if (!board[8]) {
      return 8;
    }
    return false;
  }

  getBoardCellInd(
    board: Piece[],
    ownPiece: Piece,
    userPiece: Piece,
    mainListLen: number,
  ) {
    const BOARD_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const BOARD_MID_CELL_INDICES = [1, 3, 5, 7];

    let botWin: false | number = false;
    let dummyList = [];
    let dummyListLen;
    let dummyBoardCellIndices = [];

    if (mainListLen === 1) {
      if (!board[4]) {
        return 4;
      } else if (!board[2]) {
        return 2;
      } else {
        return 8;
      }
    } else if (mainListLen === 3) {
      if (
        (board[0] && board[8] && board[0] == board[8]) ||
        (board[2] && board[6] && board[2] == board[6])
      ) {
        return BOARD_MID_CELL_INDICES[
          Math.floor(Math.random() * BOARD_MID_CELL_INDICES.length)
        ];
      }
    }

    dummyList = [...board];
    dummyListLen = dummyList.filter(Boolean).length;
    dummyBoardCellIndices = [...BOARD_INDICES];

    while (dummyListLen < 9 && dummyBoardCellIndices.length) {
      this.#botWinList = [...board];

      let randomDummyBoxInd = Math.floor(
        Math.random() * dummyBoardCellIndices.length,
      );
      const cellInd = dummyBoardCellIndices[randomDummyBoxInd];

      if (!this.#botWinList[cellInd]) {
        dummyList[cellInd] = ownPiece;
        this.#botWinList[cellInd] = ownPiece;
        if (this.isWin(ownPiece, this.#botWinList)) {
          return cellInd;
        }
      }
      dummyBoardCellIndices.splice(randomDummyBoxInd, 1);
    } // while

    dummyList = [];
    dummyList = [...board];
    dummyListLen = dummyList.filter(Boolean).length;
    dummyBoardCellIndices = [];
    dummyBoardCellIndices = [...BOARD_INDICES];

    while (dummyListLen < 9 && dummyBoardCellIndices.length) {
      this.#userWinList = [];
      this.#userWinList = [...board];
      let randomCellInd = Math.floor(
        Math.random() * dummyBoardCellIndices.length,
      );
      let botNum = dummyBoardCellIndices[randomCellInd];
      if (!this.#userWinList[botNum]) {
        dummyList[botNum] = userPiece;
        this.#userWinList[botNum] = userPiece;
        if (this.isWin(userPiece, this.#userWinList)) {
          botWin = botNum;
          break;
        }
      }
      dummyBoardCellIndices.splice(randomCellInd, 1);
    }

    if (botWin === false && mainListLen === 3 && board[4] == ownPiece) {
      if (!board[3] && !board[5]) {
        return 3;
      } else if (!board[1]) {
        return 1;
      } else if (!board[7]) {
        return 7;
      }
    }
    return botWin;
  }
}

export default Team3Bot;
