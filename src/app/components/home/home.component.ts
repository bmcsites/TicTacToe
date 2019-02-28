import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  playerTurn: boolean;
  TotalClick: number;
  constructor() {
    this.data = this.createTttData();
    this.playerTurn = false;
    this.TotalClick = 0;
    console.log(this.data);
  }

  ngOnInit() {
  }

  createTttData() {
    const obj = [];
    let row = 0;
    for (let i = 0; i < 9; i++) {
      if (i === 3 || i === 6) {
        row++;
      }
      obj.push({boxRow: row, boxIndex: i, value: null});
    }
    return obj;
  }

  markMe(box) {
    if (box.value !== null) {
      console.log('already clicked');
      return;
    } else {
      box.value = this.playerTurn ? 'o' : 'x';
      this.playerTurn = !this.playerTurn;
      this.TotalClick++;
      // minimum clicks to win  for both player : 5.
      if (this.TotalClick > 4) {
        this.checkwin(box);
      }
    }
  }

  checkwin(box) {
    if (box.boxRow === 0) {
      console.log((this.data[0].value === this.data[1].value) && (this.data[1].value === this.data[2].value));
      switch (box.boxIndex) {
        case 0:
          console.log((this.data[0].value === this.data[3].value) && (this.data[3].value === this.data[6].value));
          console.log((this.data[0].value === this.data[4].value) && (this.data[4].value === this.data[8].value));
          break;
        case 1:
          console.log((this.data[1].value === this.data[4].value) && (this.data[4].value === this.data[7].value));
          break;
        case 2:
          console.log((this.data[2].value === this.data[5].value) && (this.data[5].value === this.data[8].value));
          console.log((this.data[2].value === this.data[4].value) && (this.data[4].value === this.data[6].value));
          break;
      }
    }
    if (box.boxRow === 1) {
      console.log((this.data[3].value === this.data[4].value) && (this.data[4].value === this.data[5].value));
      switch (box.boxIndex) {
        case 3:
          console.log((this.data[0].value === this.data[3].value) && (this.data[3].value === this.data[6].value));
          break;
        case 4:
          console.log((this.data[1].value === this.data[4].value) && (this.data[4].value === this.data[7].value));
          console.log((this.data[0].value === this.data[4].value) && (this.data[4].value === this.data[8].value));
          console.log((this.data[2].value === this.data[4].value) && (this.data[4].value === this.data[6].value));
          break;
        case 5:
          console.log((this.data[2].value === this.data[5].value) && (this.data[5].value === this.data[8].value));
          break;
      }
    }
    if (box.boxRow === 2) {
      console.log((this.data[6].value === this.data[7].value) && (this.data[7].value === this.data[8].value));
      switch (box.boxIndex) {
        case 6:
          console.log((this.data[0].value === this.data[3].value) && (this.data[3].value === this.data[6].value));
          console.log((this.data[2].value === this.data[4].value) && (this.data[4].value === this.data[6].value));
          break;
        case 7:
          console.log((this.data[1].value === this.data[4].value) && (this.data[4].value === this.data[7].value));
          break;
        case 8:
          console.log((this.data[2].value === this.data[5].value) && (this.data[5].value === this.data[8].value));
          console.log((this.data[0].value === this.data[4].value) && (this.data[4].value === this.data[8].value));
          break;
      }
    }
  }

}
