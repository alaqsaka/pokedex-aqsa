import React from "react";

interface MovesProps {
  data: any;
}

const Moves: React.FC<MovesProps> = ({ data }) => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mt-3">Moves</h3>
        <div className="flex gap-4 flex-wrap">
          {data.moves.map((move: any) => (
            <>
              <div className="w-fit bg-base-100 shadow-xl rounded-md px-2 py-1">
                <div className="">
                  <div className="text-sm">{move.move.name}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moves;
