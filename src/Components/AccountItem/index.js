import React from 'react'
import classNames from 'classnames/bind'

import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img  className={cx('avatar')} src ="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/smgf5f369c884044a8df770614bbfd64717.jpeg?x-expires=1693198800&x-signature=Cced%2FWf4RK1q67z3iV9tESLxFkE%3D" alt = "nguyenVanA" />
        <div  className={cx('info')}>
            <h4  className={cx('name')}>
                <span>
                    Nguyễn Văn A
                </span>
                <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span  className={cx('username')} >
            nguyenVanA
            </span>

        </div>

    </div>
  )
}

export default AccountItem