import { MenuItem } from './../../../services/scroll-navigate.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollNavigateService } from 'src/app/services/scroll-navigate.service';

@Component({
  selector: 'app-sidebar-reforma',
  templateUrl: './sidebar-reforma.component.html',
  styleUrls: ['./sidebar-reforma.component.scss']
})
export class SidebarReformaComponent {
  menuItems$: Observable<MenuItem[]>;
  isCollapsed = true;

  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor(private scrollNavigationService: ScrollNavigateService) {
    this.menuItems$ = this.scrollNavigationService.menuItems$;
  }

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }
  
  openOnHover() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
    this.sidebarToggled.emit(this.isCollapsed);
  }
  
  closeOnLeave() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
    this.sidebarToggled.emit(this.isCollapsed);
}

  onMenuItemClick(item: MenuItem): void {
    this.scrollNavigationService.scrollToSection(item.id);
  }
}
