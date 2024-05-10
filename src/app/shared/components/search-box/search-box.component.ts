import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  //Debouncer, suscripciones y desuscripcion
  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSubscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(700)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  //Desuscripcion al finalizar y ahorro de recursos
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }


  emitValue(value: string): void {
    this.onValue.emit(value);
  }


  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

}
