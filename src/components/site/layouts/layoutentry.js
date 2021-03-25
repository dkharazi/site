import React, {useState, useEffect, useRef} from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import HeaderEntry from '../headers/headerentry'
import entryStyles from "../../../styles/entry.module.css"

const LayoutEntry = ({ title, children }) => {

    const mastheadRef = useRef(null);
    const [color, setColor] = useState("i0");
    const [topBar, setTopBar] = useState("");
    const [midBar, setMidBar] = useState("");
    const [botBar, setBotBar] = useState("");
    const [menu, setMenu] = useState("rMenuClose");

    useEffect(() => {
        const handleScroll = (event) => {
            const headerHeight = mastheadRef.current.clientHeight - 133;
            if (document.body.scrollTop >= headerHeight  || document.documentElement.scrollTop >= headerHeight) {
                menu === "rMenuClose" ? setColor("i1") : setColor("i0");
            } else {
                setColor("i0");
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [menu])

    const transitionIcon = () => {
        if (midBar === "") {
            setTopBar("rTop")
            setMidBar("rMid")
            setBotBar("rBot")
            setMenu("rMenu")
            setColor("i0");
        } else {
            const headerHeight = mastheadRef.current.clientHeight - 133;
            if (document.body.scrollTop >= headerHeight  || document.documentElement.scrollTop >= headerHeight) {
                setColor("i1");
            }
            setTopBar("")
            setMidBar("")
            setBotBar("")
            setMenu("rMenuClose")
        }
    }

    const transitionIconKey = (event) => {
        if (event.key === "Enter") {
            if (midBar === "") {
                setTopBar("rTop")
                setMidBar("rMid")
                setBotBar("rBot")
                setMenu("rMenu")
                setColor("i0");
            } else {
                const headerHeight = mastheadRef.current.clientHeight - 133;
                if (document.body.scrollTop >= headerHeight  || document.documentElement.scrollTop >= headerHeight) {
                    setColor("i1");
                }
                setTopBar("")
                setMidBar("")
                setBotBar("")
                setMenu("rMenuClose")
            }
        }
    }

    return (
        <React.Fragment>
            <div className="wrap">
                <Helmet>
                    <meta name="description" content="Personal Site" />
                    <meta name="title" property="og:title" content="Data Science" />
                    <meta property="og:type" content="Website" />
                    <meta name="image" property="og:image" content="https://live.staticflickr.com/8601/15891138064_3a9f462786_k.jpg" />
                    <meta name="description" property="og:description" content="Personal Site" />
                    <meta name="author" content="Darius Kharazi" />
                </Helmet>
                <HeaderEntry title={title} mastheadRef={mastheadRef} />
                <main className={`${entryStyles.main} ${entryStyles.container}`}>
                    {children}
                </main>
            </div>
            <div className={`${entryStyles.menu} ${menu}`}>
                <div className="container">
                    <Link className={entryStyles.menuItem} to="/">
                        Blog
                    </Link>
                    <Link className={entryStyles.menuItem} to="/about">
                        About Me
                    </Link>
                    <Link className={entryStyles.menuItem} to="/projects">
                        Projects
                    </Link>
                    <Link className={entryStyles.menuItem} to="/notes">
                        Notes
                    </Link>
                </div>
            </div>
            <div 
                className={entryStyles.toggle}
                role="button"
                onClick={transitionIcon}
                onKeyPress={transitionIconKey}
                tabIndex={0}
            >
                <span className={`${entryStyles.top} ${color} ${topBar}`} />
                <span className={`${entryStyles.middle} ${color} ${midBar}`} />
                <span className={`${entryStyles.bottom} ${color} ${botBar}`} />
            </div>
        </React.Fragment>
    )
}

export default LayoutEntry