// =============================================================================
// ZAULT WATCH — Tournament Template
// =============================================================================
// This file is the ONLY thing you need to touch to point the page at a
// different tournament. Everything in index.html reads from the globals
// defined here (`matches`, `upperGroups`, `lowerGroups`, `gfGroups`,
// `SHORT_LABEL`, `PATH_LABEL`, `INITIAL_IDS`) — nothing about the layout,
// styling, or interactivity logic lives in this file.
//
// To make a new tournament: duplicate this file (e.g. tournament-data.js ->
// tournament-data.majors2027.js), edit the values below, then point the
// <script src="..."> tag near the bottom of index.html at the new file.
// =============================================================================

// ---- Bracket + VOD data ------------------------------------------------
// One entry per match.
//   id        = unique match id, referenced by `next` / `dropsTo` below and
//               by the group id-lists further down this file
//   path      = 'up' | 'down' | 'gf'  — which bracket path the match belongs to
//   roundName = display label shown on the card (e.g. "Round 1", "Grand Final")
//   fmt       = display label for the series format (e.g. "BO3", "BO5")
//   teamA/B   = team names
//   scoreA/B  = final series score for each team
//   games     = ordered VOD urls, one per game played; use null for a game
//               that wasn't played (series ended before it was needed)
//   next      = id of the match the WINNER advances to (or null)
//   dropsTo   = id of the match the LOSER drops to — upper bracket only (or null)
const matches = [
  // round 1 Upper
  { id:'UR1-1', path:'up', roundName:'Round 1', fmt:'BO3',
    teamA:'Xtreme Gaming2', teamB:'Tundra Esports', scoreA:2, scoreB:0,
    games:['https://youtu.be/ke5nzwisv-Q','https://www.youtube.com/watch?v=D84RWQf6-gY','https://zault.net'],
    next:'UR2-1', dropsTo:'LR1-1' },
  { id:'UR1-2', path:'up', roundName:'Round 1', fmt:'BO3',
    teamA:'Parivision', teamB:'Heroic', scoreA:2, scoreB:0,
    games:['https://youtu.be/lgB8vvhSXmw','https://youtu.be/7J1bIjfKXUk','https://zault.net'],
    next:'UR2-1', dropsTo:'LR1-1' },
  { id:'UR1-3', path:'up', roundName:'Round 1', fmt:'BO3',
    teamA:'Team Tidebound', teamB:'Team Falcons', scoreA:0, scoreB:2,
    games:['https://www.youtube.com/watch?v=IoRXQU5qoVE','https://www.youtube.com/watch?v=V4kDPzmQfGc','https://zault.net'],
    next:'UR2-2', dropsTo:'LR1-2' },
  { id:'UR1-4', path:'up', roundName:'Round 1', fmt:'BO3',
    teamA:'BB Team', teamB:'Nigma Galaxy', scoreA:2, scoreB:1,
    games:['https://www.youtube.com/watch?v=np7QK-Qkc70','https://www.youtube.com/watch?v=Ioxq_neNoj4&pp=0gcJCfkLAYcqIYzv','https://www.youtube.com/watch?v=yOGrD4cFBG4'],
    next:'UR2-2', dropsTo:'LR1-2' },

  // Round 1 Lower
  { id:'LR1-1', path:'down', roundName:'Round 1', fmt:'BO3',
    teamA:'Tundra Esports', teamB:'Heroic', scoreA:0, scoreB:2,
    games:['https://www.youtube.com/watch?v=965LsZIuNpo','https://www.youtube.com/watch?v=bZIqE_la0Dw','https://zault.net'],
    next:'LR2-1', dropsTo:null },
  { id:'LR1-2', path:'down', roundName:'Round 1', fmt:'BO3',
    teamA:'Team Tidebound', teamB:'Nigma Galaxy', scoreA:0, scoreB:2,
    games:['https://www.youtube.com/watch?v=FkWUJW7m4sg&pp=0gcJCfkLAYcqIYzv','https://www.youtube.com/watch?v=hNWtt-mV0VI','https://zault.net'],
    next:'LR2-2', dropsTo:null },

  // Round 2 Upper
  { id:'UR2-1', path:'up', roundName:'Round 2', fmt:'BO3',
    teamA:'Xtreme Gaming', teamB:'Parivision', scoreA:0, scoreB:2,
    games:['https://www.youtube.com/watch?v=dW-C2Cajm-E','https://www.youtube.com/watch?v=lvNl_SSKJpg','https://zault.net'],
    next:'UF', dropsTo:'LR2-2' },
  { id:'UR2-2', path:'up', roundName:'Round 2', fmt:'BO3',
    teamA:'Team Falcons', teamB:'BB Team', scoreA:2, scoreB:1,
    games:['https://www.youtube.com/watch?v=Z9Fg-P10glo','https://www.youtube.com/watch?v=yK10CCR6U6A','https://www.youtube.com/watch?v=zyo61kPZU64'],
    next:'UF', dropsTo:'LR2-1' },

  // Round 2 Lower
  { id:'LR2-1', path:'down', roundName:'Round 2', fmt:'BO3',
    teamA:'BB Team', teamB:'Heroic', scoreA:2, scoreB:1,
    games:['https://www.youtube.com/watch?v=YEP1oUO43L4','https://www.youtube.com/watch?v=qqgxs_bg29Q','https://www.youtube.com/watch?v=Vw2suZTSIR0'],
    next:'LSF', dropsTo:null },
  { id:'LR2-2', path:'down', roundName:'Round 2', fmt:'BO3',
    teamA:'Xtreme Gaming', teamB:'Nigma Galaxy', scoreA:2, scoreB:0,
    games:['https://www.youtube.com/watch?v=HLn33oP8cik&pp=0gcJCfkLAYcqIYzv','https://www.youtube.com/watch?v=Dp0_VsS7pHk','https://zault.net'],
    next:'LSF', dropsTo:null },

  { id:'UF', path:'up', roundName:'Upper Final', fmt:'BO3',
    teamA:'Parivision', teamB:'Team Falcons', scoreA:1, scoreB:2,
    games:['https://www.youtube.com/watch?v=59TwKSEAWX4','https://www.youtube.com/watch?v=aOJ_l3PL-Ys','https://www.youtube.com/watch?v=LepJpEs_2ts'],
    next:'GF', dropsTo:'LF' },

  { id:'LSF', path:'down', roundName:'Semifinal', fmt:'BO3',
    teamA:'BB Team', teamB:'Xtreme Gaming', scoreA:0, scoreB:2,
    games:['https://www.youtube.com/watch?v=MBsNs8QE_gY','https://www.youtube.com/watch?v=8LALMXiGx1Q','https://zault.net'],
    next:'LF', dropsTo:null },

  { id:'LF', path:'down', roundName:'Lower Final', fmt:'BO3',
    teamA:'Parivision', teamB:'Xtreme Gaming', scoreA:1, scoreB:2,
    games:['https://www.youtube.com/watch?v=bMjOS94IFjo','https://www.youtube.com/watch?v=4WdegZkxAAE','https://www.youtube.com/watch?v=OOmS0V_V4IA'],
    next:'GF', dropsTo:null },

  { id:'GF', path:'gf', roundName:'Grand Final', fmt:'BO5',
    teamA:'Team Falcons', teamB:'Xtreme Gaming', scoreA:3, scoreB:2,
    games:['https://www.youtube.com/watch?v=ahknoefViss','https://www.youtube.com/watch?v=nNJtSWsVPdM&pp=0gcJCfkLAYcqIYzv','https://www.youtube.com/watch?v=UfET_n7n2NA','https://www.youtube.com/watch?v=lA6bxkJca3Y&pp=0gcJCfkLAYcqIYzv','https://www.youtube.com/watch?v=cHvTjBIX53c'],
    next:null, dropsTo:null },
];

// ---- Bracket layout ------------------------------------------------------
// Which matches appear in which bracket column, top to bottom, left to
// right. Purely presentational — doesn't affect who-plays-who logic, that's
// entirely driven by each match's own `next`/`dropsTo` fields above. Every
// id used here must exist in `matches`.
const upperGroups = [
  { name:'Round 1',     ids:['UR1-1','UR1-2','UR1-3','UR1-4'] },
  { name:'Round 2',     ids:['UR2-1','UR2-2'] },
  { name:'Upper Final', ids:['UF'] },
];
const lowerGroups = [
  { name:'Round 1',     ids:['LR1-1','LR1-2'] },
  { name:'Round 2',     ids:['LR2-1','LR2-2'] },
  { name:'Semifinal',   ids:['LSF'] },
  { name:'Lower Final', ids:['LF'] },
];
const gfGroups = [{ name:'Grand Final', ids:['GF'] }];

// Human-readable short names for the matches that can appear as a
// "loser drops to X" target (see dropsTo above). Only lower-bracket Round
// 1/2 slots and the Lower Final ever get dropped into, so those are the
// only keys that need to exist here.
const SHORT_LABEL = {
  'LR1-1':'Lower R1 · M1', 'LR1-2':'Lower R1 · M2',
  'LR2-1':'Lower R2 · M1', 'LR2-2':'Lower R2 · M2',
  'LF':'Lower Final',
};
const PATH_LABEL = { up:'Upper Bracket', down:'Lower Bracket', gf:'Grand Final' };

// ---- Reveal state ----------------------------------------------------
// Matches whose matchups are known up front (nothing to spoil about who
// plays whom) when the page first loads — normally the Round 1 upper-bracket
// slots. Their *results* still stay hidden until the person reveals them.
const INITIAL_IDS = ['UR1-1','UR1-2','UR1-3','UR1-4'];
