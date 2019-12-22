import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Links extends Component {
	links = [
		'http://www.sokolov-pronajem.cz',
		'http://www.olovi.cz',
		'http://www.sokolov.cz',
		'http://www.karlovyvary.cz',
	];

	render() {
		const { title, linkTitles } = this.props;

		return (
			<div className="odkazy">
				<h1>{title}:</h1>
				<ul>
					{this.links.map( ( link, index ) => (
						<li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{linkTitles[index]}</a></li>
					) )}
				</ul>
			</div>
		);
	}
}

Links.propTypes = {
	title: PropTypes.string.isRequired,
	linkTitles: PropTypes.array.isRequired
};

export default Links;
