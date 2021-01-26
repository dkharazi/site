import React from 'react'
import entryStyles from '../../../styles/entry.module.css'

const HeaderEntry = ({ title, mastheadRef }) => {
    return (
        <div ref={mastheadRef} className={entryStyles.masthead}>
            <h1 className={`${entryStyles.title} ${entryStyles.container}`}>
                {title}
            </h1>
            <div className={entryStyles.curve}>
                <div className ={entryStyles.curveContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 19" height="70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                        <path d="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeaderEntry