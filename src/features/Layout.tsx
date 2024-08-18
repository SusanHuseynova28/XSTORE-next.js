import React from 'react';
import Header from './Header';
import CardSection from '../components/CardSection';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-black  flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <CardSection />
            <Footer/>
         
        </div>
    );
};

export default Layout;
