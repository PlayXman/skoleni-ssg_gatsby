import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from "gatsby";

const Gallery = ( { title } ) => {
	//Error with sorting
	const photos = useStaticQuery( graphql`
		query {
		  full: allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "fotky/*"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		        name
		      }
		    }
		  }
		  thumbs: allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "fotky/thumbs/*"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		        name
		      }
		    }
		  }
		}
	` );

	return (
		<div className="fotky">
			<h1>{title}:</h1>

			{photos.full.edges.map( ( value, index ) => {
				return (
					<a
						key={index}
						className="obrazek"
						href={value.node.childImageSharp.original.src}
						data-lightbox="fotky"
						style={{
							background: `url('${photos.thumbs.edges[index].node.childImageSharp.original.src}')`
						}}
					/>
				);
			} )}
		</div>
	);
};

Gallery.propTypes = {
	title: PropTypes.string.isRequired
};

export default Gallery;
