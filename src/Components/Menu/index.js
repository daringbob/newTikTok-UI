import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../Popper";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ items, children }) {
  const renderItems = () => {
    return items.map((data, index) => (<MenuItem key={index} data={data}></MenuItem>));
  };
  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
