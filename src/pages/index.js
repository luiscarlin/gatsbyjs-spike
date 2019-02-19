import React from "react"

import Layout from "../components/layout"
import Listing from '../components/listing'
import SEO from "../components/seo"
import Archive from '../components/archive'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Listing />
  </Layout>
)

export default IndexPage
