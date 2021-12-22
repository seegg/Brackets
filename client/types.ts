interface Match {
  id1: number,
  id2: number | null,
  winner: number | null,
};

interface MatchRound {
  id: number,
  round: number,
  matches: Match[],
}

interface MatchBracket {
  id: number,
  rounds: MatchRound[],

}

export { Match, MatchRound, MatchBracket }