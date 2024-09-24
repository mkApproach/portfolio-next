import React from "react"
import ContentLoader from "react-content-loader"

const ArticleItemSkeltonCard = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="25" y="25" rx="3" ry="3" width="178" height="20" />
    <rect x="25" y="67" rx="3" ry="3" width="600" height="20" />
    <rect x="25" y="115" rx="3" ry="3" width="84" height="20" />
    <rect x="320" y="115" rx="3" ry="3" width="84" height="20" />
  </ContentLoader>
)

export default ArticleItemSkeltonCard

