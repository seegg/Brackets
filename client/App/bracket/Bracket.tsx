import React from "react";
import Round from "../round/Round";
import { MatchBracket } from "../../types";




const Bracket = ({ id, rounds }: MatchBracket): JSX.Element => {

  return <div className="bracket">
    {rounds.map((round, idx) => {
      return <Round {...round} key={idx} />
    })}
  </div>
}

export default Bracket;