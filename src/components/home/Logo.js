import React from 'react';

function SectionLogo() {
    return (
        <div className="section_logo" >
            <div className="logo">
                <h1 className="logo_h1">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

const Logo = () => {
    return (
        <SectionLogo />
    );
};

export default Logo;