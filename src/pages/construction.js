import React from 'react'
import Layout from '../components/site/layouts/layout'
import '../styles/index.scss'

const ErrorPage = () => {

    return (
        <Layout>
            <div className="errorContent">
                <div className="errorTitle">
                    <p>Under Construction</p>
                </div>
                <div className="errorDesc">
                    <p>Sorry, I'm doing some work on this page.</p>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage