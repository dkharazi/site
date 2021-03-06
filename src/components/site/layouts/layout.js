import React from 'react'
import Header from '../headers/header'
import Footer from '../footer'
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
    return (
        <div className="wrap">
            <Helmet>
                <meta name="description" content="Personal Site" />
                <meta name="title" property="og:title" content="Data Science" />
                <meta property="og:type" content="Website" />
                <meta name="image" property="og:image" content="https://live.staticflickr.com/8601/15891138064_3a9f462786_k.jpg" />
                <meta name="description" property="og:description" content="Personal Site" />
                <meta name="author" content="Darius Kharazi" />
            </Helmet>
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout