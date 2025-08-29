import {
  Directive, ElementRef, Input, OnDestroy, AfterViewInit
} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';
import { filter, Subscription } from 'rxjs';
import { PageTransitionOpts } from '../types';

@Directive({
  selector: '[appPageTransition]',
  standalone: true,
})
export class PageTransitionDirective implements AfterViewInit, OnDestroy {
  @Input('appPageTransition') opts?: Partial<PageTransitionOpts>;

  private sub = new Subscription();
  private player?: AnimationPlayer;

  private get cfg(): PageTransitionOpts {
    return {
      enterMs: this.opts?.enterMs ?? 220,
      exitMs:  this.opts?.exitMs  ?? 180,
      offsetPx: this.opts?.offsetPx ?? 8,
      delayInMs: this.opts?.delayInMs ?? 60,
    };
  }

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private router: Router,
    private builder: AnimationBuilder
  ) {
    const el = this.elRef.nativeElement;
    el.style.display = el.style.display || 'block';
    el.style.willChange = 'opacity, transform';
    el.style.contain = 'content';

    this.sub.add(
      this.router.events.pipe(filter(e => e instanceof NavigationStart))
        .subscribe(() => this.fadeOut())
    );

    this.sub.add(
      this.router.events.pipe(filter(e =>
        e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError
      ))
      .subscribe(() => this.fadeIn())
    );
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => this.fadeIn());
  }

  private fadeOut() {
    this.stop();
    const { exitMs, offsetPx } = this.cfg;
    const factory = this.builder.build([
      animate(`${exitMs}ms ease`, style({ opacity: 0, transform: `translateY(${offsetPx}px)` }))
    ]);
    this.player = factory.create(this.elRef.nativeElement);
    this.player.play();
  }

  private fadeIn() {
    this.stop();
    const { enterMs, offsetPx, delayInMs } = this.cfg;
    const factory = this.builder.build([
      style({ opacity: 0, transform: `translateY(${offsetPx}px)` }),
      animate(`${enterMs}ms ${delayInMs}ms ease-out`, style({ opacity: 1, transform: 'translateY(0)' }))
    ]);
    this.player = factory.create(this.elRef.nativeElement);
    this.player.play();
  }

  private stop() {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.stop();
  }
}
