import { Component, ViewChild } from '@angular/core';
import { StatusModalComponent } from '@components/home/status-modal/status-modal.component';
import { TttBoxService } from '@services/ttt-box.service';

interface Data {
  [index: number]: {boxIndex: number; value: string; winBox: boolean};
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Data;
  playerTurn;
  TotalClick;
  @ViewChild( 'statusModal' ) child: StatusModalComponent ;

  constructor(private tttBoxService: TttBoxService) {
    this.data = this.tttBoxService.createTttData();
    this.startNewGame();
  }

  boxClicked(box) {
     // check if box already clicked.
    if (box.value !== null) {
      console.log('already clicked');
    } else {
      // change value of box by the player that clicked.
      box.value = this.playerTurn ? 'o' : 'x';
      // change turn
      this.playerTurn = !this.playerTurn;
      // add to click count
      this.TotalClick++;
      // minimum clicks to win  for both player : 5.
      if (this.TotalClick > 4) {
        // check if player win
        const winOtion = this.tttBoxService.checkWin(box);
        if (winOtion) {
          this.data[winOtion[0]].winBox = true;
          this.data[winOtion[1]].winBox = true;
          this.data[winOtion[2]].winBox = true;
          this.openModal(box.value === 'x' ? 'player 1 win' : 'player 2 win');
          this.startNewGame();
        } else {
          // check for tie
          if (this.TotalClick === 9) {
            this.openModal('Its a Tie');
            this.startNewGame();
          }
        }
      }
    }
  }

  startNewGame() {
    this.TotalClick = 0;
    this.playerTurn = false;
  }

  openModal(winObj) {
    this.child.openModal(winObj);
  }

}
