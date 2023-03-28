import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() showModalChange = new EventEmitter<boolean>(false);

  public closeModal(): void {
    this.showModalChange.emit(false);
  }
}
