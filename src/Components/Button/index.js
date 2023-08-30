import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    to,
    href,
    leftIcon,
    rightIcon,
    children,
    onClick,
    customClassName,
    ...passProps
}) {
    let Comp = "button";

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof (props[key]) === 'function') {
                delete props[key]
            }
        }
        )
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = "a";
        props.href = href;
    }

    const classes = cx("wrapper", {
        [customClassName]: customClassName,
        primary,
        outline,
        rounded,
        text,
        disabled,
        large,
        small

    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes ={

    primary : PropTypes.bool,
    outline : PropTypes.bool,
    text : PropTypes.bool,
    rounded : PropTypes.bool,
    disabled : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    to : PropTypes.string,
    href : PropTypes.string,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    children : PropTypes.node.isRequired,
    onClick : PropTypes.func,
    customClassName : PropTypes.string,
}

export default Button;
