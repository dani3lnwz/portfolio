import React from 'react';
import new1 from '../../../assets/Home/justice.png';
import new2 from '../../../assets/Home/perfume.png';
import new3 from '../../../assets/Home/car.png';
import MyProject from '../MyProject/MyProject';

const myProjects = [
    {id:1, name: 'True For Justice', img: new1, description: 'This is a independent person website,where he or she can show their services'},
    {id:2, name: 'Perfume Store', img: new2, description: 'Its a perfume website,where i show products and also new arriavles'},
    {id:3, name: 'Cars Equipment', img: new3, description: 'Its a car house,where users can orders part,users also give a review.Admin can add a new part and also delete a part'}
]

const MyProjects = () => {
    return (
        <div className='container'>
            <h2  className='text-white text-center mt-5'>My Projects</h2>
            <div className='row'>
                {
                    myProjects.map(myProject => 
                        <MyProject
                        key={myProject.id}
                        myProject = {myProject}
                        ></MyProject>)
                }
            </div>

        </div>
    );
};

export default MyProjects;