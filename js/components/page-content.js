import { h, Component, define } from 'skatejs';

const styles = {
  container: {
    margin: '16px',
  }
};

export default class XPageContent extends Component {
  static get is() { return 'x-page-content'; }

  renderCallback() {
    return <div style={styles.container}><slot /></div>;
  }
}

define(XPageContent);
