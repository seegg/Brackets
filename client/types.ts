interface Match {
  isTop: boolean,
  id1: number,
  id2: number | null,
  winner: number
};

interface MatchRound {
  id: number,
  matches: Match[];
}

export { Match, MatchRound }