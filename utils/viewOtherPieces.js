    //seach opponent powns front of my piece if there is empy slot i can jump
    expots.viewOtherPieces = (finishMoves,side,board,moves,pown)=>{

        if(moves == "up" && pown.row <= 14 ){
            finishMoves.up = pointsOfMoves.up;
        }

        //see my next square and junm
        if(moves == "up" && pown.row <= 12 && board[pown.row + 2][pown.column] != " "){
            finishMoves.upJump = pointsOfMoves.upJump;
        }

        // can i do diagonal movement
        // verifi if there are opponet pawn and a wall
        if(moves == "up" && pown.row <=12 && board[(pown.row + 1)][pown.column] != " " &&
            (board[(pown.row + 2)][pown.column] != side ||  board[(pown.row + 2)][pown.column] != " ")
             && board[(pown.row + 3)][pown.column] != " " ){ 
            //Be a wall on rigth side 
            if(board[pown.row + 1 ][pown.column - 1 ] == " " ){
                finishMoves.upRigth = pointsOfMoves.upRigth;
            //Be a wall on left side 
            }else if (board[pown.row + 1 ][pown.column + 1 ] == " "){
                finishMoves.upLeft = pointsOfMoves.upLeft;
            }
        }

        if(moves == "rigth"){
            finishMoves.rigth = pointsOfMoves.rigth;
        }

        if(moves == "left"){
            finishMoves.left = pointsOfMoves.left;
        }

        if(moves == "down"){
            finishMoves.down = pointsOfMoves.down;
        }

        return finishMoves;
    
    }
    