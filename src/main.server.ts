import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app/app.routes.server';

export default function render() {
  return bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideServerRouting(serverRoutes),
    ],
  });
}