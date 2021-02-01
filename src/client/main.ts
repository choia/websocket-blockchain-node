import { render } from '../../node_modules/lit-html/lit-html.js';
import { Application } from './ui/application.js';


let renderingIsInProgress = false;
let application = new Application(async () => {
  if (!renderingIsInProgress) {
    renderingIsInProgress = true;
    await 0;
    renderingIsInProgress = false;
    render(application.render(), document.body);
  }
});