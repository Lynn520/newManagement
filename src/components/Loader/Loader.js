import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Loader.less'

class Loader extends Component {
  constructor(props) {
    this.state = {
      spinning: false
    };
  }

  render() {
    return (<div className={classNames(styles.loader, { [styles.hidden]: !this.state.spinning })}>
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text} >LOADING</div>
      </div>
    </div>)
  }
}
Loader.propTypes = {
  spinning: PropTypes.bool,
}
export default Loader
