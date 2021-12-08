import React from "react";

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
    languages,
  } = props;

  return (
    <div className={featured ? "job-featured" : "job-container"}>
      <div className="image">
        <img src={`${logo}`} alt="cover" className="imageSize" />
      </div>
      <div>
        <div className="flex">
          <p className="color-company">{company}</p>
          {isNew && <p className="featured">FEATURED</p>}

          {featured && <p className="isNew">New! </p>}
        </div>
        <div>
          <h2>
            {position}
          </h2>
        </div>
        <div className="job-info flex">
          <p>{postedAt} .</p>
          <p>{role} . </p>
          <p> {contract}</p>
        </div>
      </div>
      <div className="isNew">
        {languages.map((lenguaje) => {
          return <p className="flex">{lenguaje}</p>;
        })}
        {/*  lenguajes.split(',') */}
        {/* Es un array entonces tenemos que recorrerlo con map */}
      </div>
    </div>
  );
}

export default Job;
