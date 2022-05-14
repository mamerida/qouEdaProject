

exports.makeBoard = (board) =>{
    
    if(!board || board.length != 289){
        throw new Error("Error in board string")
    }
    //convert string to array
    const  messageBoard=  Array.from(board);

    let finalBoard = [];
    let index = 0;

    //create columns of my bora
    for(let i = 0; i < 17 ; i++){
        
        //create row of my board 
        let row=[]
        for(let u = 0; u <17 ; u ++){
            row.push(messageBoard[index]);
            index++;
        }
        finalBoard.push(row)
    }

    return finalBoard

}






    

