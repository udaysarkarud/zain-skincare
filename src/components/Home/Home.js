import React from 'react';
import BannerSection from './BannerSection/BannerSection'
import ServicesSection from './ServicesSection/ServicesSection'
import ClientsSection from './ClientsSection/ClientsSection'
import TestimonialsSection from './TestimonialsSection/TestimonialsSection'
import ContactSection from './ContactSection/ContactSection'
const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <BannerSection />
            <ServicesSection />
            <ClientsSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
};

export default Home;