import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function MenuItem({data,onClick}) {
  const classes = cx('menu-item',{
    separate : data.separate
  })
  return (
    <Button customClassName={classes} to ={data.to} leftIcon={data.icon} onClick={onClick}>
        {data.title}
    </Button>
  )
}

export default MenuItem