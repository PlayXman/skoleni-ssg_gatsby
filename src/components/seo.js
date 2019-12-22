import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO( { lang, title } ) {
	const { site } = useStaticQuery( graphql`
      query {
        site {
          siteMetadata {
            description
            keywords
            author
          }
        }
      }
    ` );

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s`}
			meta={[
				{
					name: `description`,
					content: site.siteMetadata.description,
				},
				{
					name: 'author',
					content: site.siteMetadata.author
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: site.siteMetadata.description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: site.siteMetadata.description,
				},
			]}
		/>
	)
}

SEO.defaultProps = {
	lang: `cs`,
};

SEO.propTypes = {
	lang: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default SEO
