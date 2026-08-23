// =============================================================================
// ZAULT WATCH — Tournament Template
// =============================================================================
// This file is the ONLY thing you need to touch to point the page at a
// different tournament. Everything in index.html reads from the globals
// defined here (`matches`, `upperGroups`, `lowerGroups`, `gfGroups`,
// `SHORT_LABEL`, `PATH_LABEL`, `INITIAL_IDS`) — nothing about the layout,
// styling, or interactivity logic lives in this file.
//
// To make a new tournament: duplicate this file, edit the values below,
// then point the <script src="..."> tag near the bottom of index.html at
// the new file (or just overwrite this one).
// =============================================================================


// =============================================================================
// SECTION 1 — MATCHES
// =============================================================================
// One block per match. Copy-paste the blank template below for each new
// match, fill in every field, and leave a blank line between matches.
//
//   id         unique match id — short and yours to choose (e.g. 'UR1-1').
//              Referenced by next/dropsTo below, and by the id lists in
//              SECTION 2, so if you invent a new id, use the exact same
//              spelling everywhere it's referenced.
//   path       'up'   = upper bracket
//              'down' = lower bracket
//              'gf'   = grand final
//   roundName  label shown on the card, e.g. 'Round 1', 'Grand Final'
//   fmt        series format label shown on the card, e.g. 'BO3', 'BO5'
//   teamA      first team's name
//   teamB      second team's name
//   scoreA     teamA's final series score (number)
//   scoreB     teamB's final series score (number)
//   game1      VOD url for game 1 — use null if that game wasn't played
//   game2      VOD url for game 2 — use null if that game wasn't played
//   game3      VOD url for game 3 — use null if that game wasn't played
//              (add game4 / game5 lines + entries in the games:[...] array
//              below for a BO5 match — see the Grand Final block for an
//              example)
//   next       id of the match the WINNER advances to — use null if none
//   dropsTo    id of the match the LOSER drops to (upper bracket only) —
//              use null if none
//
// ---- BLANK TEMPLATE — copy this for a new match -----------------------
//   {
//     id: '',
//     path: '',
//     roundName: '',
//     fmt: '',
//     teamA: '',
//     teamB: '',
//     scoreA: 0,
//     scoreB: 0,
//     game1: null,
//     game2: null,
//     game3: null,
//     games: [game1, game2, game3],
//     next: null,
//     dropsTo: null,
//   },
// -------------------------------------------------------------------------

const matches = [];

// --- Upper Bracket · Round 1 ---------------------------------------------

{
  const id        = 'UR1-1';
  const path      = 'up';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = '';
  const teamB     = '';
  const scoreA    = 6;
  const scoreB    = 7;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'UR2-1';
  const dropsTo   = 'LR1-1';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'UR1-2';
  const path      = 'up';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = 'Parivision';
  const teamB     = 'Heroic';
  const scoreA    = 6;
  const scoreB    = 0;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'UR2-1';
  const dropsTo   = 'LR1-1';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'UR1-3';
  const path      = 'up';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = '';
  const teamB     = '';
  const scoreA    = 0;
  const scoreB    = 6;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'UR2-2';
  const dropsTo   = 'LR1-2';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'UR1-4';
  const path      = 'up';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = '';
  const teamB     = '';
  const scoreA    = ;
  const scoreB    = ;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const next      = 'UR2-2';
  const dropsTo   = 'LR1-2';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Lower Bracket · Round 1 ----------------------------------------------

{
  const id        = 'LR1-1';
  const path      = 'down';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = '';
  const teamB     = '';
  const scoreA    = 0;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'LR2-1';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'LR1-2';
  const path      = 'down';
  const roundName = 'Round 1';
  const fmt       = 'BO3';
  const teamA     = 'Team ';
  const teamB     = '';
  const scoreA    = 0;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'LR2-2';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Upper Bracket · Round 2 -----------------------------------------------

{
  const id        = 'UR2-1';
  const path      = 'up';
  const roundName = 'Round 2';
  const fmt       = 'BO3';
  const teamA     = 'Xtreme Gaming';
  const teamB     = 'Parivision';
  const scoreA    = 0;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'UF';
  const dropsTo   = 'LR2-2';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'UR2-2';
  const path      = 'up';
  const roundName = 'Round 2';
  const fmt       = 'BO3';
  const teamA     = 'Team Falcons';
  const teamB     = 'BB Team';
  const scoreA    = 2;
  const scoreB    = 1;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const next      = 'UF';
  const dropsTo   = 'LR2-1';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Lower Bracket · Round 2 -----------------------------------------------

{
  const id        = 'LR2-1';
  const path      = 'down';
  const roundName = 'Round 2';
  const fmt       = 'BO3';
  const teamA     = 'BB Team';
  const teamB     = 'Heroic';
  const scoreA    = 2;
  const scoreB    = 1;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const next      = 'LSF';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

{
  const id        = 'LR2-2';
  const path      = 'down';
  const roundName = 'Round 2';
  const fmt       = 'BO3';
  const teamA     = '';
  const teamB     = '';
  const scoreA    = 2;
  const scoreB    = 0;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'LSF';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Upper Final -------------------------------------------------------

{
  const id        = 'UF';
  const path      = 'up';
  const roundName = 'Upper Final';
  const fmt       = 'BO3';
  const teamA     = 'Parivision';
  const teamB     = 'Team Falcons';
  const scoreA    = 1;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const next      = 'GF';
  const dropsTo   = 'LF';
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Lower Semifinal -----------------------------------------------------

{
  const id        = 'LSF';
  const path      = 'down';
  const roundName = 'Semifinal';
  const fmt       = 'BO3';
  const teamA     = 'BB Team';
  const teamB     = 'Xtreme Gaming';
  const scoreA    = 0;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = 'https://zault.net';
  const next      = 'LF';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Lower Final ---------------------------------------------------------

{
  const id        = 'LF';
  const path      = 'down';
  const roundName = 'Lower Final';
  const fmt       = 'BO3';
  const teamA     = 'Parivision';
  const teamB     = 'Xtreme Gaming';
  const scoreA    = 1;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const next      = 'GF';
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3], next, dropsTo });
}

// --- Grand Final (BO5 — 5 games) ------------------------------------------

{
  const id        = 'GF';
  const path      = 'gf';
  const roundName = 'Grand Final';
  const fmt       = 'BO5';
  const teamA     = 'Team Falcons';
  const teamB     = 'Xtreme Gaming';
  const scoreA    = 3;
  const scoreB    = 2;
  const game1     = '';
  const game2     = '';
  const game3     = '';
  const game4     = '';
  const game5     = '';
  const next      = null;
  const dropsTo   = null;
  matches.push({ id, path, roundName, fmt, teamA, teamB, scoreA, scoreB,
    games: [game1, game2, game3, game4, game5], next, dropsTo });
}


// =============================================================================
// SECTION 2 — BRACKET LAYOUT
// =============================================================================
// Which matches appear in which bracket column, top to bottom, left to
// right. Purely presentational — doesn't affect who-plays-who logic, that's
// entirely driven by each match's own next/dropsTo fields in SECTION 1.
// Every id listed here must match an id used in SECTION 1 exactly.

const upperGroups = [
  { name: 'Round 1',     ids: ['UR1-1', 'UR1-2', 'UR1-3', 'UR1-4'] },
  { name: 'Round 2',     ids: ['UR2-1', 'UR2-2'] },
  { name: 'Upper Final', ids: ['UF'] },
];

const lowerGroups = [
  { name: 'Round 1',     ids: ['LR1-1', 'LR1-2'] },
  { name: 'Round 2',     ids: ['LR2-1', 'LR2-2'] },
  { name: 'Semifinal',   ids: ['LSF'] },
  { name: 'Lower Final', ids: ['LF'] },
];

const gfGroups = [
  { name: 'Grand Final', ids: ['GF'] },
];


// =============================================================================
// SECTION 3 — "LOSER DROPS TO" LABELS
// =============================================================================
// Human-readable short name shown for each match that can appear as a
// "loser drops to X" target (i.e. every id used as a dropsTo value in
// SECTION 1). Only lower-bracket slots and the Lower Final are ever dropped
// into, so those are the only ids that need an entry here.
// One line per match — add or remove lines to match your dropsTo ids.

const SHORT_LABEL = {
  'LR1-1': 'Lower R1 · M1',
  'LR1-2': 'Lower R1 · M2',
  'LR2-1': 'Lower R2 · M1',
  'LR2-2': 'Lower R2 · M2',
  'LF':    'Lower Final',
};


// =============================================================================
// SECTION 4 — BRACKET PATH LABELS
// =============================================================================
// Display label for each `path` value used in SECTION 1. Only needs
// changing if you rename the 'up' / 'down' / 'gf' path values themselves.

const PATH_LABEL = {
  up:   'Upper Bracket',
  down: 'Lower Bracket',
  gf:   'Grand Final',
};


// =============================================================================
// SECTION 5 — INITIAL REVEAL STATE
// =============================================================================
// Ids of the matches whose matchups are known up front when the page first
// loads (nothing to spoil about who plays whom) — normally the Round 1
// upper-bracket slots. Their *results* still stay hidden until the person
// reveals them. One id per line for easy editing.

const INITIAL_IDS = [
  'UR1-1',
  'UR1-2',
  'UR1-3',
  'UR1-4',
];
