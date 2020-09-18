import React from 'react'
import Layout from '../components/layout'
import '../styles/index.scss'

const ErrorPage = () => {

    return (
        <Layout>
            <div className="errorContent">
                <div className="errorTitle">
                    <p>Under Construction</p>
                </div>
                <div className="errorDesc">
                    <p>Sorry, we're doing some work on this page.</p>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage