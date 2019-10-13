import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../component/Layout'
import Content, { HTMLContent } from '../component/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient" style={{backgroundColor:'rgba(254, 247, 230, 0.87)', height:'100vh'}}>
      <div className="container" >
        {/* <div className="columns"> */}
          {/* <div className="column is-10 is-offset-1"> */}
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{
          
          backgroundColor: 'rgba(30, 26, 26, 0.79)',
          color: 'white',
          padding: '1rem',
          marginTop:'0em',
          width:'100%'
        }}>
                {title}
              </h2>
              <PageContent style={{color:'rgba(254, 247, 230, 0.87)'}} content={content} />
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
