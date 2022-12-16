import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input() currentStep: number | undefined;
  @Input() total: number | undefined;

  multiplier: number | undefined;

  setMultiplier() {
    if (this.total) {
      let result = 100 / this.total;
      this.multiplier = result;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['total']?.currentValue) {
      this.setMultiplier();
    }
  }

}
