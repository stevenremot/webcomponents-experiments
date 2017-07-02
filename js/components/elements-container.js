import { h, Component, define } from 'skatejs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

export default class XElementsContainer extends Component {
  static get is() { return 'x-elements-container'; }

  renderCallback() {
    return <div style={styles.container}><slot /></div>;
  }
}

define(XElementsContainer);
