import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState, useEffect , useRef } from "react";

import { Wrapper as PopperWrapper } from "src/Components/Popper";
import AccountItem from "src/Components/AccountItem";
import styles from './Search.module.scss'

import {
    SearchIcon,
} from "src/Components/Icon";



const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const [showResult,setShowResult] = useState(true)
    const inputRef = useRef()


    useEffect(() => {
        setTimeout(() => {
          setSearchResult([1, 2, 3]);
        }, 0);
      }, []);
    
    const handleShowHideResult = () =>{
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside ={handleShowHideResult}
        >
            <div className={cx("search")}>
                <input
                    ref = {inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange = {(e) => setSearchValue(e.target.value)}
                    onFocus = {() => setShowResult(true)}
                />
                {
                    searchValue &&
                <button className={cx("clear")} onClick = {
                    () =>{
                        setSearchValue('')
                        inputRef.current.focus()
                    }
                }>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                }
                
                {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search