import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
	render() {
		const { lang, button } = this.props;

		return (
			<div className="mapa">
				<iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4090694824586!2d12.55648361589072!3d50.25109850958987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0eb570af8b321%3A0xde8223985d1fad3e!2sPenzion%20Steininger!5e1!3m2!1scs!2scz!4v1575242109050!5m2!1s${lang}!2scz`} width="385" height="385" frameBorder="0" style={{border: 0}} allowFullScreen="" title="Oloví" />
				<a href="https://maps.google.cz/maps?f=q&amp;source=embed&amp;hl=cs&amp;geocode=&amp;q=Penzion+Steininger+olovi&amp;sll=50.25121,12.558674&amp;sspn=0.001082,0.002556&amp;t=h&amp;brcurrent=5,0,0&amp;ie=UTF8&amp;hq=Penzion+Steininger&amp;hnear=Olov%C3%AD&amp;ll=50.251053,12.558662&amp;spn=0.006295,0.006295">{button}</a>
			</div>
		);
	}
}

Map.propTypes = {
	lang: PropTypes.string.isRequired,
	button: PropTypes.string.isRequired
};

export default Map;
