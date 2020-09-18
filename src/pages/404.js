import React from 'react'
import '../styles/index.scss'

const ErrorPage = () => {

    return (
        <div className="errorContent">
            <div className="errorTitle">
                <p>Page not found</p>
            </div>
            <div className="errorDesc">
                <p>We couldn't find what you were looking for.</p>
            </div>
        </div>
    )
}

export default ErrorPage