import { Component } from '@angular/core';

@Component({
  selector: 'app-reforma-tributaria',
  templateUrl: './reforma-tributaria.component.html',
  styleUrls: ['./reforma-tributaria.component.scss']
})
export class ReformaTributariaComponent {
  title = 'scrolapsy-app';
  isSidebarCollapsed = false;

  onSidebarToggled(isCollapsed: boolean): void {
    this.isSidebarCollapsed = isCollapsed;
  }
}
