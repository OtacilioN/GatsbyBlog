import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ops não encontrei</h1>
    <p>Tem certeza que deveria ter algo aqui?</p>
  </Layout>
)

export default NotFoundPage
