import React from 'react';

const MyProject = ({ myProject}) => {
    const {name, img, description} = myProject;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default MyProject;