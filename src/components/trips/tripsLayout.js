import React from 'react'
import TripsHeader from './tripsHeader'
import Footer from '../site/footer'

const TripsLayout = ({ children, mast }) => {
    return (
        <div className="wrap">
            <TripsHeader mastDOM={mast} />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default TripsLayout;