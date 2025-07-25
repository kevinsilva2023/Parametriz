import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();
  private loadingStartTime: number = 0;
  private minimumLoadingTime = 1000;

  constructor() { }

  show(): void {
    this.loadingStartTime = Date.now();
    this.loadingSubject.next(true);
  }

  hide(): void {
    const elapsedTime = Date.now() - this.loadingStartTime;
    const remainingTime = Math.max(0, this.minimumLoadingTime - elapsedTime);

    if (remainingTime > 0) {
      timer(remainingTime).subscribe(() => {
        this.loadingSubject.next(false);
      });
    } else {
      this.loadingSubject.next(false);
    }
  }

  isLoading(): boolean {
    return this.loadingSubject.value;
  }
}
