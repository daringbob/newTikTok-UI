import { faMagnifyingGlass, faSpinner, faCircleXmark, faEllipsisV, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'



import images from 'src/assets/images'
import AccountItem from 'src/Components/AccountItem';
import Button from 'src/Components/Button';
import Menu from 'src/Components/Menu';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.Module.scss'

const cx = classNames.bind(styles)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to :'/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts'
  },
]

function Header() {
  const [searchResult, setSearchResult] = useState([])

  useEffect(
    () => {
      setTimeout(() => {
        setSearchResult([1, 2, 3])
      }, 0)
    }, []
  )


  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} className={cx('logo')} />

        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder='Search accounts and videos' spellCheck={false} />
            <button className={cx('clear')}>

              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>

              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

        </Tippy>

        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>


          <Menu items ={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </Menu>

        </div>
      </div>
    </header>

  )
}

export default Header