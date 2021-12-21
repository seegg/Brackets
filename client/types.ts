interface Match {
  id1: number,
  id2: number | null,
  winner: number | null
};

interface MatchRound {
  id: number,
  matches: Match[];
}

export { Match, MatchRound }