class Maliste extends React.Component {

   constructor(props){
   super(props);
   this.state={ count : 0 ,value : '', selected :''};

}

	render() {
		//const titre = this.props.titre;
		//const numbers = this.props.numbers || [];
		//const data = numbers.map(n => <li key={n}>{`Element ${n}`}</li>);

   const nombers = this.state.count
   ? new Array(this.state.count).fill(0).map((_,i)=> i)
   : [];

   return (
    <>
    <select />
    <button 
     onClick={e => {
       e.preventDefault();
       e.stopPropagation();
       this.state({count : this.state.count + 1});
     }}


        

		//return (
		//	<div className="list">
			//	<h1>{titre}</h1>
			//	<ul>{data}</ul>
		//	</div>
		);
	}
}

export default MaListe;