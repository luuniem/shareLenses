import { Component, OnChanges, Input } from 'angular2/core';

@Component({
  selector: 'thumb-icon',
  templateUrl: 'app/shared/thumbs.component.html',
  styleUrls: ['app/shared/thumbs.component.css']
})

export class ThumbComponent {
  @Input() rating: number;
  thumbWidth: number;

  ngOnChanges(): void {
    this.thumbWidth = this.rating * 86/5;
  }
}
