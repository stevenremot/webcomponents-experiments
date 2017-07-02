import { h, Component, define } from 'skatejs';

const styles = {
  container: {
    border: '1px solid var(--color-element)',
    borderRadius: '4px',
    margin: '16px',
    minWidth: '320px',
  },
};

export default class XElementWrapper extends Component {
  static get is() { return 'x-element-wrapper'; }

  connectedCallback() {
    super.connectedCallback();
    this.style.flex = '1 1 auto';
  }

  renderCallback() {
    return <div style={styles.container}><slot /></div>;
  }
}

define(XElementWrapper);
