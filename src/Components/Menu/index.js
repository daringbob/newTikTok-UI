import PropTypes from 'prop-types'
import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFn = () => {

}

function Menu({ items = [], children, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((data, index) => {
      const isParent = !!data.children;
      return (
        <MenuItem
          key={index}
          data={data}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, data.children]);
            }
            else {
              onChange(data)
            }
          }}
        />
      );
    });
  };

  const renderMenu = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx("menu-popper")}>
        {history.length > 1 && (
          <Header
            title={current.title}
            onBack={handleOnBack
            }
          />
        )}
        <div className={cx('menu-body')}>
        {renderItems()}

        </div>
      </PopperWrapper>
    </div>
  )

  const handleOnBack = () => setHistory((prev) => prev.slice(0, prev.length - 1))

  const handleResetMenu = () => setHistory(prev => prev.slice(0, 1))

  return (
    <Tippy
      hideOnClick={false}
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={renderMenu}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propType = {
  items : PropTypes.array,
  children : PropTypes.node,
  onChange : PropTypes.func,
}

export default Menu;
