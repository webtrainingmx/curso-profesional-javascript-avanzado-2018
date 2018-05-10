import {range, interval} from 'rxjs';
import {map, take, toArray, filter} from 'rxjs/operators';
import SpreadOperationsRenamed from './spread-operations';
import Destructuring from './destructuring';
import {CONFIG as Configuration} from './spread-operations';
import {createTemplateLiteral} from './template-literals';

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

// Using an "static" method
console.log('CONFIG', Configuration);
SpreadOperationsRenamed.createExampleSpreadSyntax();

// Call to function creating a NEW object
const destructuringExample = new Destructuring();
destructuringExample.createDestructuringExample();
destructuringExample.arrayDestructuringExample();

// Call to simple function
createTemplateLiteral();
