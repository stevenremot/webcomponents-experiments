import { h, Component, define } from 'skatejs';

const sentences = ['test', '123', 'lol'];

export default class XRandomSentence extends Component {
  static get is() { return 'x-random-sentence'; }

  renderCallback() {
    return <p>{sentences[Math.floor(Math.random() * sentences.length)]}</p>;
  }
}

define(XRandomSentence);
