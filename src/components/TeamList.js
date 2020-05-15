import React from 'react';

class TeamList extends React.Component
{
	state = {
		characters: [
			{ name: 'Player One' },
			{ name: 'Player Two' },
			{ name: 'Player Three' },
			{ name: 'Player Four' },
			{ name: 'Player Five' },
		]
	}

	renderList()
	{
		let characterList = this.state.characters;
		return characterList.map(char => {
			return(
				<li className="list-group-item" key={index}>
					{ char.name }
					<button type='button' 
						className='btn btn-danger'
						Delete
					</button>
				</li>
			);
		});
	}

	render()
	{
		const characterList = this.renderList();

		return (
			<div className="card">
				<h3>Team List</h3>
				<ul className="list-group">
					{ characterList }
				</ul>
			</div>
		);
	}
}

export default TeamList;