import { h, define, Component, props } from 'skatejs';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '32px',

    backgroundColor: 'var(--color-header-bg)',
    color: 'var(--color-header-fg)',
  },

  title: {
    margin: 0,
    padding: 0,
    fontSize: '20px',
  }
};

export default class XHeader extends Component {
  static get is() { return 'x-header'; }

  static get props() {
    return {
      title: props.string,
    };
  }

  renderCallback() {
    return (
      <header style={styles.container}>
        <h1 style={styles.title}>{this.title}</h1>
      </header>
    );
  }
}

define(XHeader);
