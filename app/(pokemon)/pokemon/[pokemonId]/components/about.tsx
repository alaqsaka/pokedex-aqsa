import React from "react";

interface AboutProps {
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
  console.log("ability", data.abilities);
  return (
    <div>
      <div className="grid grid-cols-2 mt-2">
        <p className="text-gray-300 font-bold">Species</p>
        <p className="font-bold text-black capitalize">{data.species.name}</p>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <p className="text-gray-300 font-bold">Height</p>
        <p className="font-bold text-black">{data.height}&quot;</p>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <p className="text-gray-300 font-bold">Weight</p>
        <p className="font-bold text-black">{data.weight} lbs</p>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <p className="text-gray-300 font-bold">Abilities</p>
        <div>
          <p className="font-bold text-black">
            {data.abilities.map((item: any, index: number) => (
              <span key={item.ability.name} className="capitalize">
                {index == 0 ? item.ability.name : `, ${item.ability.name}`}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
