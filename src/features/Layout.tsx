import React from 'react';
import Header from '../components/Header';

import CardSection from '../components/CardSection';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <CardSection />
         
        </div>
    );
};

export default Layout;
