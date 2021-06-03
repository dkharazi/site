import React from 'react'
import Header from '../site/headers/header'
import Footer from '../site/footer'
import { newsContainer } from '../../styles/news/layout.module.css'

const NewsLayout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className={newsContainer}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default NewsLayout;