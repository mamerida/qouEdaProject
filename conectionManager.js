//use dotenv to protect my token when upload to github
//and if Its necesarry change on environment i will can change the token or anything in .env fije 
require('dotenv').config()
const {WebSocket} = require("ws")
//import factory with different response about message
const {FactoryServerEvent} = require("./factoryEvents");


//URL OF WEBSOCKET
const socket = new WebSocket(`wss://4yyity02md.execute-api.us-east-1.amazonaws.com/ws?token=${process.env.TOKEN}`);

//make listener
socket.on('open', function open() {
let moves = 0;
    //catch message
    socket.on('message',  async function  catchMessage(data) {
        try{
            //convert message to JSON to work with him
            let message = JSON.parse(data) ;
            //filter filter according to the message
            switch (message.event) {

                case "challenge":
                    const response = FactoryServerEvent.acceptChallengeResponse(message);
                    socket.send(response);
                    break;
                
                case "your_turn":
                    //to be able to insert walls generated a turn counter
                    console.log(message);
                    let responseMove = ""
                    if(moves == 5 && message.data.walls != 0 ){
                        responseMove = FactoryServerEvent.myTurnResponseWall(message);
                        moves = 0; 
                    }else{
                        responseMove = FactoryServerEvent.myTurnResponsePawn(message);
                        moves++;
                    }
                    console.log(responseMove);
                    socket.send(responseMove);
                    break;
    
                case "list_users":
                    FactoryServerEvent.userList(message);
                    break;
                case "game_over":
                    console.log("Game Over");
                    break;
                default:
                    break;
            }


        }catch(e){
            console.log("Error : ",e)
        }
    });
});





