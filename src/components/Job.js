import React, { useState } from "react";

// import account from "./images/account.svg";

import { CompanyImages } from "../enum/Companies";

// import ReactLogo from './logo.svg';

function Job(props) {
  const {
    logo,
    company,
    position,
    id,
    location,
    isNew,
    role,
    level,
    featured,
    postedAt,
    contract,
    filterWithTags,
    languages,
  } = props;



  const [photo, setPhoto] = useState(company.toLowerCase().split(" ").join("").split(".").join(""));


  return (
    <div className={featured ? "job-featured" : "job-container"}>
      <div className="company-image-wrapper">
        <img src={CompanyImages[photo]} alt="cover" className="imageSize" />
      </div>
      <div>
        <div className="flex">
          <p className="color-company">{company}</p>
          {featured && <p className="featured">FEATURED</p>}

          {isNew && <p className="isNew">New! </p>}
        </div>
        <div>
          <h2>{position}</h2>
        </div>
        <div className="job-info">
          <p>{postedAt}</p>
          <p>{role}</p>
          <p>{contract}</p>
        </div>
      </div>
      <div className="flex-languages">
        {languages.map((lenguaje) => {
          return (
            <p key={id}
              className="language-badge"
              onClick={() => filterWithTags()}>
              {lenguaje}
            </p>
          );
        })}
        {/*  lenguajes.split(',') */}
        {/* Es un array entonces tenemos que recorrerlo con map */}
      </div>
    </div>
  );
}

export default Job;
