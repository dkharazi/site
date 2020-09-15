import React from 'react'
import Header from './header'
import Footer from './footer'

const NotesLayout = ({ children }) => {
    return (
        <div className="wrap">
            <Header />
            <main className="notesContainer">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default NotesLayout