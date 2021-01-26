import React from 'react'
import { Helmet } from "react-helmet"
import HeaderCategory from '../headers/headercategory'
import Footer from '../footer'

const LayoutCategory = ({ icon, cat, title, children }) => {
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
            <HeaderCategory icon={icon} cat={cat} title={title} />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LayoutCategory