import React from "react";
import ContentLoader from "react-content-loader";

const ContestsSkeltonCard = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="60" cy="59" r="32" />
    <rect x="25" y="112" rx="0" ry="0" width="126" height="18" />
    <rect x="25" y="143" rx="0" ry="0" width="354" height="18" />
    <rect x="25" y="174" rx="0" ry="0" width="354" height="18" />
    <rect x="25" y="205" rx="0" ry="0" width="354" height="18" />
  </ContentLoader>
);

export default ContestsSkeltonCard;
