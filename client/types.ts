interface Match {
  id1: number | null,
  id2: number | null,
  winner: number | null,
};

interface MatchRound {
  id: number,
  roundNo: number,
  matches: Match[],
}

interface MatchBracket {
  id: number,
  rounds: MatchRound[],

}

export { Match, MatchRound, MatchBracket }