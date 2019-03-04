import { Injectable } from '@angular/core';

@Injectable()

export class TttBoxService {
  winOptions: any;
  tttData: any;

  constructor() {
    this.winOptions = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
    this.tttData = [];
  }

  createTttData() {
    for (let i = 0; i < 9; i++) {
      this.tttData.push({boxIndex: i, value: null, winBox: null});
    }
    return this.tttData;
  }

  checkWin(currentBox) {
    // filter the data for the current player
    const currentPlayerData = this.tttData.filter( box => box.value ===  currentBox.value);
    // check all win option for a match
    return this.winOptions.find((winOption)  => winOption.every(element => currentPlayerData.find(boxData => boxData.boxIndex === element)));
  }

  resetBoard() {
    this.tttData.forEach((box) => {
      box.value = null;
      box.winBox = null;
    });
  }

}
