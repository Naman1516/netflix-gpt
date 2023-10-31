import React from "react";

const ModalMatchPercentage = ({ voteAvg, voteCount }) => {
  if (!voteAvg || !voteCount) return null;
  const matchPercentage = voteAvg.toString()[0] + voteCount.toString()[0];

  const matchPercentageColor =
    matchPercentage > 75 ? "text-green-500" : "text-yellow-500";

  return (
    <span className={`font-bold ${matchPercentageColor}`}>
      {matchPercentage}% Match
    </span>
  );
};

export default ModalMatchPercentage;
