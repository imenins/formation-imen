import React from 'react';

class MaListe extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, value: '' };
	}

	render() {
		/*const nombers = this.state.count;
   ? new Array(this.state.count).fill(0).map((_,i)=>i)
    : [];*/

		return (
			<div>
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						this.setState({ count: this.state.count + 1 });
					}}
				>
					+
				</button>

				<h1>Mes listes</h1>
				{this.state.count}

				<input
					type="text"
					value={this.state.value}
					onChange={e => {
						this.setState({ value: e.target.value });
					}}
				/>
			</div>
		);
	}
}

export default MaListe;
