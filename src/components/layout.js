import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import "../assets/css/style.css";
import "../assets/css/lightbox.css";
import "../assets/css/dimensions.css";
// import "../assets/js/jquery-1.10.2.min"; todo
// import "../assets/js/lightbox-2.6.min"; todo

const Layout = ( { children } ) => {
	const data = useStaticQuery( graphql`
	  query SiteTitleQuery {
	    site {
	      siteMetadata {
	        languages {
	            url
	            iso
	        }
	      }
	    }
	  }
	` );

	return (
		<>
			<div className="pozadi1 pozadi" />
			<div className="pozadi2 pozadi" />
			<div className="pozadi3 pozadi" />

			<div className="kontejner">
				<div className="jazyky">
					{data.site.siteMetadata.languages.map( ( lang ) => {
						return <Link key={lang.iso} to={lang.url} activeClassName="active"><span>{lang.iso}</span></Link>;
					} )}
				</div>
				<div className="obsah">

					{children}

					<footer>
						<p>
							&copy; 2015 DESIGNby<span>MB</span>
						</p>
					</footer>
					<endora />
				</div>
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout
