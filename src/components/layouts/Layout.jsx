import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer'
import PageContent from './PageContent'
import { ProfileAndOrdersProvider } from '../../contexts/context'

export default function Layout() {
    return (
        <div>
            <ProfileAndOrdersProvider>
                <Header />
                <PageContent />
                <Footer />
            </ProfileAndOrdersProvider>
        </div>
    )
}
