import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostBrief from "../components/postBrief"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostBrief />
    <PostBrief />
    <PostBrief />
  </Layout>
)

export default IndexPage
