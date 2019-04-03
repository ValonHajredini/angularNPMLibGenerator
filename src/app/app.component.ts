import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedValue: number;
  codeBasic = `
<eko-RatingInput
  [fontSize]="'16px'"
  [editable]="false"
  [value]="3">
</eko-RatingInput>`;
  codeBasicInput = `
<eko-RatingInput
  (ratingValueOutput)="getRattingValue($event)"
  [fontSize]="'16px'"
></eko-RatingInput>`;

  codeBasicInputColorAndFontSizeAndNumberAndLabel = `
<eko-RatingInput
    [starColor]="'#4FEE4A'"
    [labelColor]="'#4FEE4A'"
    [fontSize]="'28px'"
    [rateNumber]="true"
>Star Ratting</eko-RatingInput>

<eko-RatingInput
    [starColor]="'#aaa'"
    [labelColor]="'#333'"
    [fontSize]="'28px'"
    [rateNumber]="true"
>Star Ratting</eko-RatingInput>`;
  public basicUse = '';
  getRattingValue(e) {
    console.log('Value: ', e);
  }
  getRattingValueInput(e) {
    this.selectedValue = e;
  }
}
