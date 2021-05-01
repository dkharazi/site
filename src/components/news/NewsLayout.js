import React from 'react'
import Header from '../site/headers/header'
import Footer from '../site/footer'
import layoutStyles from '../../styles/news/layout.module.css'

const NewsLayout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className={layoutStyles.newsContainer}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default NewsLayout;