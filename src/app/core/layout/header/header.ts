import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

type HeaderCfg = { hideLogo?: boolean; compact?: boolean; transparent?: boolean };

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  headerCfg: HeaderCfg = { hideLogo: false };
  showSidebar = false;

  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let r = this.ar;
        while (r.firstChild) r = r.firstChild;
        return r.snapshot.data['header'] as HeaderCfg || {};
      })
    ).subscribe(cfg => this.headerCfg = { hideLogo: false, ...cfg });
  }

  onHamburgerClick() {
    this.toggleSidebar.emit();
  }
}
