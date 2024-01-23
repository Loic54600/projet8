import React from 'react';
import Navigation from '../components/Navigation';
import Error from '../components/Error';
import Footer from '../components/Footer';




const Errorhome = () => {
    return (
        <div className='Errorhome'>
            <Navigation /> 
                <main>
                    <Error />
                </main>
            <Footer />
        </div>
    );
};

export default Errorhome;