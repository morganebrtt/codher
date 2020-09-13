import React from 'react';
import './HomeContent.css';
import ContainedButton from '../Buttons/ContainedButton';
import OutlinedButton from '../Buttons/OutlinedButton';

const HomeContent = () => {
    return (
        <div id="homeContent">
            <h2>welcome</h2>
            <div id="homeText">
                <p>Codher est une plateforme de mise en relation entre développeuses web</p>
            </div>
            <ContainedButton linkTo="/auth/register" colors={{text: '#FFF', bg: '#D25857'}}>
                Inscription
            </ContainedButton>
            <OutlinedButton linkTo="/auth/login" colors={{text: '#FFF', bg: 'none', border: '1px solid #FFF'}}>
                Connexion
            </OutlinedButton>
        </div>
    )
};

export default HomeContent;