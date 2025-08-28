import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute, NavigationEnd, Router
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavigatorService } from '../../../shared/services/navigator.service';

type HeaderCfg = { hideLogo?: boolean; backgroundWhite?: boolean };

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  headerCfg: HeaderCfg = { hideLogo: false, backgroundWhite: false };

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    public  nav: NavigatorService,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let r = this.ar;
        while (r.firstChild) r = r.firstChild;
        return (r.snapshot.data['header'] as HeaderCfg) || {};
      })
    ).subscribe(cfg => this.headerCfg = { hideLogo: false, ...cfg });
  }

  onHamburgerClick() { this.toggleSidebar.emit(); }
}
