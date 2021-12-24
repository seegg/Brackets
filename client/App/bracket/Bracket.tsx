import React from "react";
import Round from "../round/Round";
import { MatchBracket } from "../../types";




const Bracket = ({ id, rounds }: MatchBracket): JSX.Element => {

  return <>
    {rounds.map((round, idx) => {
      return <Round {...round} key={idx} />
    })}
  </>
}

export default Bracket;