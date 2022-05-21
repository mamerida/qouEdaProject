exports.viewVerticalLine = (verticialNearWalls,board) =>{
    //catch Errors 
    if(!verticialNearWalls || !board){
        throw new Error("Error need all parameters");
    }

    let countEmptySquareLeft = 0;
    let countEmptySquareRigth = 0;

   
    for(let i = verticialNearWalls.row ; i <= verticialNearWalls.row + 2 ; i++ ){

        if(board[i][verticialNearWalls.column + 1] ==" " ){
            countEmptySquareLeft += 1;
        }

        if(board[i][verticialNearWalls.column - 1] ==" " ){
            countEmptySquareRigth += 1;
        }
    }

    if( countEmptySquareLeft  > countEmptySquareRigth){
        //put wall on rigth
        return(verticialNearWalls);
    }else{
        verticialNearWalls.column -= 1;
        return(verticialNearWalls);
    }
}