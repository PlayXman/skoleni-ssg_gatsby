import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		const {children, logoTitle} = this.props;

		return (
			<header>
				<div className="logo">
					<h1>{logoTitle}</h1>
					<hr />
					<h2>STEININGER</h2>
				</div>
				<article>
					{children}
				</article>
			</header>
		);
	}
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
	logoTitle: PropTypes.string.isRequired
};

export default Header;
