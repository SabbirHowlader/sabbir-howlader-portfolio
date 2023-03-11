import React from 'react';

const Skills = ({ skill }) => {
  const { name, img } = skill
  return (
    <div className="card bg-base-200 shadow-xl">

      <div className="card-body items-center text-center">
        <figure><img src={img} alt="Shoes" className="rounded-xl" style={{ height: 150, width: 150 }} /></figure>
        <h4 className="card-title font-serif text-2xl hover:text-orange-400 text-green-500">{name}</h4>
      </div>
    </div>
  );
};

export default Skills;