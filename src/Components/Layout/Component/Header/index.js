import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React from 'react'

import images from 'src/assets/images'
import styles from './Header.Module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} className={cx('logo')} />
        <div className={cx('search')}>
          <input placeholder='Search accounts and videos' spellCheck={false} />
          <button className={cx('clear')}>

            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon icon={faSpinner} />
          <button className={cx('search-btn')}>

            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}>

        </div>
      </div>
    </header>

  )
}

export default Header