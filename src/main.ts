import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

const MAX_WAIT_MS = 4000;

function safeShowHtml() {
  if (document.documentElement.style.visibility !== 'visible') {
    document.documentElement.style.visibility = 'visible';
  }
}

(async () => {
  try {
    const fontsReady: Promise<any> =
      'fonts' in document ? (document as any).fonts.ready : Promise.resolve();

    await Promise.race([
      fontsReady,
      new Promise((res) => setTimeout(res, MAX_WAIT_MS)), // fallback
    ]);
  } catch {
    // ignora
  } finally {
    safeShowHtml();
  }
  bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
})();