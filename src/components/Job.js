import React from 'react';

// import ReactLogo from './logo.svg';


function Job (props) {

    const { logo, company, position, id, location, role, isNew, level, featured, postedAt, contract, languages } = props; 
    
    return (
        <div className="job-container">
            <div className="image">
                <img src={logo} alt="cover" className="imageSize" />
            </div>
            <div>
                <div className="flex">
                    <p>{company}</p>
                    <p className="featured">{JSON.stringify(featured)}</p>
                    <p className="isNew">{JSON.stringify(isNew)}</p>

                </div>
                <div>
                    <h2>{level} {position}</h2>
                    </div>
                    <div className="job-info flex">
                        <p>{postedAt} .</p>
                        <p>{role} . </p>
                        <p> {contract}</p>
                    </div>
                </div>
                <div>
                    <p className="isNew">{languages}</p>  {/*  lenguajes.split(',') */}
                </div>
            </div>

    );
}

export default Job;