import { MenuItem } from 'src/app/features/reforma-tributaria/services/scroll-navigate.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollNavigateService } from 'src/app/features/reforma-tributaria/services/scroll-navigate.service';

@Component({
  selector: 'app-sidebar-reforma',
  templateUrl: './sidebar-reforma.component.html',
  styleUrls: ['./sidebar-reforma.component.scss']
})
export class SidebarReformaComponent {
  menuItems$: Observable<MenuItem[]>;
  isCollapsed = false;

  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor(private scrollNavigationService: ScrollNavigateService) {
    this.menuItems$ = this.scrollNavigationService.menuItems$;
  }

  ngOnInit(): void { }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit(this.isCollapsed);
  }

  onMenuItemClick(item: MenuItem): void {
    this.scrollNavigationService.scrollToSection(item.id);
  }
}
