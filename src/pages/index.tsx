import React from 'react';
import Header from '@/features/Header';
import CardSection from '../components/CardSection';
import Footer from '@/features/Footer';


const HomePage: React.FC = () => {
    return (
        <div>
            <Header />           
            <CardSection />  
            <Footer/>     
        </div>
    );
}

export default HomePage;
