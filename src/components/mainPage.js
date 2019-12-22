import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from "./layout";
import Header from "./header";
import Links from "./links";
import Gallery from "./gallery";
import Map from "./map";
import Contact from "./contact";
import Rooms from "./rooms";

class MainPage extends Component {
	render() {
		const {
			children,
			header,
			rooms,
			contact,
			map,
			gallery,
			links
		} = this.props;

		return (
			<Layout>
				<Header logoTitle={header.title}>
					{header.text}
				</Header>
				<article>
					{children}
				</article>
				<Rooms rooms={rooms} />
				<Contact title={contact.title} isCz={contact.isCz} />
				<Map lang={map.lang} button={map.button} />
				<Gallery title={gallery.title} />
				<Links title={links.title} linkTitles={links.linkTitles} />
			</Layout>
		);
	}
}

MainPage.propTypes = {
	children: PropTypes.node.isRequired,
	header: PropTypes.exact( {
		title: PropTypes.string.isRequired,
		text: PropTypes.node.isRequired
	} ),
	rooms: PropTypes.array.isRequired,
	contact: PropTypes.exact({
		title: PropTypes.string.isRequired,
		isCz: PropTypes.bool.isRequired
	}),
	map: PropTypes.exact({
		lang: PropTypes.string.isRequired,
		button: PropTypes.string.isRequired
	}),
	gallery: PropTypes.exact({
		title: PropTypes.string.isRequired
	}),
	links: PropTypes.exact( {
		title: PropTypes.string.isRequired,
		linkTitles: PropTypes.array.isRequired
	} )
};

export default MainPage;
