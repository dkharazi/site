import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout