import React from 'react';

const Skills = ({skill}) => {
    const {name, img} =skill
    return (
        <div className="card bg-base-100 shadow-xl my-5">
        <figure className="px-10 pt-10 ">
          <img src={img} alt="Shoes" className="rounded-xl" style={{height: 150, width:150}} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-3xl hover:text-orange-400 text-green-500">{name}</h2>
        </div>
      </div>
    );
};

export default Skills;