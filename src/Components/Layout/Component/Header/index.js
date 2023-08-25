import classNames from 'classnames/bind'
import React from 'react'

import styles from './Header.Module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>

      </div>
    </header>

  )
}

export default Header