import React from 'react'
import Header from '../site/headers/header'
import Footer from '../site/footer'
import { styleContainer } from '../../styles/style-transfer/layout.module.css'

const StyleLayout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className={styleContainer}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default StyleLayout;