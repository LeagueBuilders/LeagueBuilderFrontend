import React from 'react';

const NavBar = (props) => (
  	<div className="NavBar"> 
  		<img src='/LeagueBuilderLogo.png' alt="Logo" onClick={props.logoOnClick}/>
		<p> League Item Builder </p>
  	</div>
);

export default NavBar;
