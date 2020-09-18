import React, {useState, useEffect, useRef} from 'react'
import { Link } from "gatsby"
import notesPageStyles from "../styles/notespage.module.css"

const NotesPageLayout = ({ title, children }) => {

    const mastheadRef = useRef(null);
    const [color, setColor] = useState("i0");
    const [topBar, setTopBar] = useState("");
    const [midBar, setMidBar] = useState("");
    const [botBar, setBotBar] = useState("");
    const [menu, setMenu] = useState("rMenuClose");

    useEffect(() => {
        const handleScroll = (event) => {
            const headerHeight = mastheadRef.current.clientHeight - 33;
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
            const headerHeight = mastheadRef.current.clientHeight - 33;
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
                const headerHeight = mastheadRef.current.clientHeight - 33;
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
                <header ref={mastheadRef} className={notesPageStyles.masthead}>
                    <h1 className={`${notesPageStyles.title} notesContainer`}>{title}</h1>
                </header>
                <main className={`${notesPageStyles.main} notesPageContainer`}>
                    {children}
                </main>
            </div>
            <div className={`${notesPageStyles.menu} ${menu}`}>
                <div className="container">
                    <Link className={notesPageStyles.menuItem} to="/">
                        Blog
                    </Link>
                    <Link className={notesPageStyles.menuItem} to="/about">
                        About Me
                    </Link>
                    <Link className={notesPageStyles.menuItem} to="/projects">
                        Projects
                    </Link>
                    <Link className={notesPageStyles.menuItem} to="/notes">
                        Notes
                    </Link>
                </div>
            </div>
            <div 
                className={notesPageStyles.toggle}
                role="button"
                onClick={transitionIcon}
                onKeyPress={transitionIconKey}
                tabIndex={0}
            >
                <span className={`${notesPageStyles.top} ${color} ${topBar}`} />
                <span className={`${notesPageStyles.middle} ${color} ${midBar}`} />
                <span className={`${notesPageStyles.bottom} ${color} ${botBar}`} />
            </div>
        </React.Fragment>
    )
}

export default NotesPageLayout