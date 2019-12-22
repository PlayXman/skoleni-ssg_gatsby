import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from "gatsby";

const Rooms = ( { rooms } ) => {
	const pics = useStaticQuery( graphql`
		query {
		p1: allFile(filter: {relativePath: {glob: "pokoje/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p1/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		p2: allFile(filter: {relativePath: {glob: "pokoje/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p2/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		  p3: allFile(filter: {relativePath: {glob: "pokoje/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p3/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		p4: allFile(filter: {relativePath: {glob: "pokoje/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p4/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		p1Thumbs: allFile(filter: {relativePath: {glob: "pokoje/thumbs/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p1/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		p2Thumbs: allFile(filter: {relativePath: {glob: "pokoje/thumbs/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p2/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		  p3Thumbs: allFile(filter: {relativePath: {glob: "pokoje/thumbs/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p3/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
		p4Thumbs: allFile(filter: {relativePath: {glob: "pokoje/thumbs/*"}, sourceInstanceName: {eq: "images"}, name: {regex: "/^p4/"}}, sort: {fields: name, order: ASC}) {
		    edges {
		      node {
		        childImageSharp {
		          original {
		            src
		          }
		        }
		      }
		    }
		  }
	  }
	` );

	return (
		<div id="pokoje">
			{rooms.map( ( room, index ) => {
				const id = `p${index + 1}`;

				return (
					<>
						<input type="checkbox" name="pok" id={id} />
						<label htmlFor={id}>
							<div className="sipka" />
							<article>
								<h3>{room.title}</h3>
								{room.text}
							</article>
							{pics[id].edges.map( ( pic, pIndex ) => (
								<a
									key={`${id}_${pIndex}`}
									className="obrazek"
									href={pic.node.childImageSharp.original.src}
									data-lightbox={id}
									style={{
										background: `url('${pics[`${id}Thumbs`].edges[pIndex].node.childImageSharp.original.src}')`
									}}
								/>
							) )}
						</label>
					</>
				);
			} )}
		</div>
	);
};

Rooms.propTypes = {
	rooms: PropTypes.array.isRequired
};

export default Rooms;
