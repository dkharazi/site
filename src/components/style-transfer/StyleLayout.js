import React from 'react'
import Header from '../site/headers/header'
import Footer from '../site/footer'
import layoutStyles from '../../styles/style-transfer/layout.module.css'

const StyleLayout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className={layoutStyles.styleContainer}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default StyleLayout;