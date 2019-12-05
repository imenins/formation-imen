import React from 'react';
import MaListe from './liste';
//import Montabelau from './tableau';

const App = () => (
	<>
		<h1>Mes listes</h1>
		<MaListe titre="toto" />
		<MaListe titre="rrr" />
		<MaListe titre="rrr" numbers={[1, 2, 3]} />
	</>
);

export default App;
