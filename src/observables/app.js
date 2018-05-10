// import {Observable} from 'rxjs';
import {range, interval} from 'rxjs';
import {map, take, toArray, filter} from 'rxjs/operators';

class App {

  constructor() {
    this.source$ = interval(300);
    this.subscription$ = null;
    this.isStreamEnabled = false;
  }

  registerDOMEvents() {
    let $button = document.querySelector('#js-stop-stream');

    $button.addEventListener('click', () => {
      if (this.isStreamEnabled) {
        this.subscription$.unsubscribe();
      }

    });
  }

  start() {
    this.registerDOMEvents();
  }

  createStream() {
    this.isStreamEnabled = true;
    this.subscription$ = this.source$.pipe(
        filter(x => x % 2 === 0),
        map(x => x * x)
    ).subscribe(
        data => console.log('onNext: %s', data),
        error => console.log('onError: %s', error),
        () => console.log('onCompleted'));
  }

}

const app = new App();
app.start();
app.createStream();
