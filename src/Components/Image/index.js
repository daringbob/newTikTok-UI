import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "src/assets/images";

import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, customFallback = images.no_image, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    console.log(fallback);

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={() => setFallback(customFallback)}
        />
    );
});

export default Image;
