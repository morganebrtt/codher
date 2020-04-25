import React from 'react';
import './HomeContent.css';
import ContainedButton from '../Buttons/ContainedButton';
import OutlinedButton from '../Buttons/OutlinedButton';

const HomeContent = () => {
    return (
        <div id="homeContent">
            <h2>welcome</h2>
            <div id="homeText">
                <p>Ce petit animal tout mignon est un wombat. 
                Pendant les terribles incendies en Australie, 
                il a accueilli de nombreuses autres espèces</p>
            </div>
            <ContainedButton colors={{text: '#FFF', bg: '#D25857'}}>
                Connexion
            </ContainedButton>
            <OutlinedButton colors={{text: '#FFF', bg: 'none', border: '1px solid #FFF'}}>
                Inscription
            </OutlinedButton>
        </div>
    )
};

export default HomeContent;