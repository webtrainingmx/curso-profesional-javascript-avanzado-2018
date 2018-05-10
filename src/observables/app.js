// import {Observable} from 'rxjs';
import {range, interval} from 'rxjs';
import {map, take, toArray, filter} from 'rxjs/operators';
import SpreadOperationsRenamed from './spread-operations';
import {CONFIG as Configuration} from './spread-operations';

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
        console.warn('Subscription removed');
      }

    });
  }

  start() {
    this.registerDOMEvents();
  }

  createTemplateLiteral() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    const protocol = 'https';
    const hostname = 'webtraining.zone';
    const usersAPIURL = `${protocol}://${hostname}/api/v1/users`;

    console.log('usersAPIURL', usersAPIURL);
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
app.createTemplateLiteral();
app.createStream();

console.log('CONFIG', Configuration);
SpreadOperationsRenamed.createExampleSpreadSyntax();
