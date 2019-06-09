export const getFromMatrix = m => ([x, y]) => (m[y] || [])[x];

export const neighborDirs = [
  [ -1, -1 ], [  0, -1 ], [ 1, -1 ],
  [ -1,  0 ],             [ 1,  0 ],
  [ -1,  1 ], [  0,  1 ], [ 1,  1 ]
];

// x coordinate
// y coordinate
// matrix

export const getNeighbors = (x, y, m) => neighborDirs
  // From deltas to coordinates
  .map(([dX, dY]) => [ x + dX, y + dY ])
  // From coordinates to values
  .map(getFromMatrix(m))
  // Filter out-of-bounds
  .filter(v => v !== undefined)
