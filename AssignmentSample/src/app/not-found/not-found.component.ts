import { Component, OnInit } from '@angular/core';
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  log: any;
  appRef: any;
  updates: any;

  constructor() { }

  ngOnInit(): void {
    this.log.init();
// Allow the app to stabilize first
// then poll for updates with interval()
const appIsStable$ = this.appRef.isStable.pipe(
first((isStable: boolean) => isStable === true));
const everyHour$ = interval(1 * 60 * 60 * 1000);
const everyHourOnceAppIsStable$ =
concat(appIsStable$, everyHour$);
everyHourOnceAppIsStable$.subscribe(
() => this.updates.checkForUpdate());
  }

}
