import React from "react"
import Layout from "../components/layout"
import HomePage from "../components/home"
import WorkPage from "../components/work"
import AboutPage from "../components/about"

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <WorkPage />
      <AboutPage />
    </Layout>
  )
}
