import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
return (
  <Layout>
    <SEO title="Page two" />
    <h1>About Page</h1>
    <p>Welcome to page 2</p>
    
  </Layout>
)
  }
}


export default About
