import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>Prject</p>
      {detail && <p>Detail</p>}
    </div>
  );
}

export default About;
