const {viewVerticalLine} = require('../../utils/viewVerticalLine');

const firstPawn = {row:0,column:2};
const board_array_withOut_Walls = [
    [
      ' ', ' ', 'N', ' ', ' ',
      ' ', ' ', ' ', 'N', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', 'N',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', 'S', ' ', ' ',
      ' ', ' ', ' ', 'S', ' ',
      ' ', ' ', ' ', ' ', 'S',
      ' ', ' '
    ]
  ];
let firstPawnWall = {row:2,column:8};
let firstPawnWallLeft = {row:6,column:6};
const board_array_with_walls = [
[
    ' ', ' ', 'N', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', 'N', '|',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', '*',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', '|',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    '|', 'N', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    '*', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    '|', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ',
    ' ', ' '
],
[
    ' ', ' ', 'S', ' ', ' ',
    ' ', ' ', ' ', 'S', ' ',
    ' ', ' ', ' ', ' ', 'S',
    ' ', ' '
]
];

describe(" funciton returns pawn that is going to be placed vertical wall  " , ()=>{
    test("with out message", ()=>{
        expect(()=>{viewVerticalLine()}).toThrow(new Error("Error need all parameters"))
    })

    test("there arent wall ", ()=>{
        expect(viewVerticalLine(firstPawn,board_array_withOut_Walls)).toStrictEqual({row:0,column:1})
    })

    test("there are wall on rigth", ()=>{
        expect(viewVerticalLine(firstPawnWall,board_array_with_walls)).toStrictEqual({row:2,column:7})
    })

    test("there are wall on left", ()=>{
        expect(viewVerticalLine(firstPawnWallLeft,board_array_with_walls)).toStrictEqual({row:6,column:6})
    })

})