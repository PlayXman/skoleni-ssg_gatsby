import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
	render() {
		const {title, isCz} = this.props;

		return (
			<article className="kontakt">
				<h1>{title}:</h1>
				<address>
					<div>
						<p><span>(+420)</span> 722 915 669</p>
						<p><span>(+420)</span> 775 226 071</p>
						<a className="mail" href="mailto:FrantisekSteininger@seznam.cz">FrantisekSteininger@seznam.cz</a>
					</div>
					<p className="adresa">
						Na Svahu 129‎,
						<br />
						357 07, Oloví,
						<br />
						{isCz ? 'Česká Republika' : 'Czech Republic'}
					</p>
				</address>
			</article>
		);
	}
}

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	isCz: PropTypes.bool.isRequired
};

export default Contact;
