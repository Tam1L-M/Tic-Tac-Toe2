export  const wincheck=(state:any,count:number)=>{
    
if(state[0]&&state[0]==state[1]&&state[1]==state[2]){
    return state[0];
}
if(state[3]&&state[3]==state[4]&&state[4]==state[5]){
    return state[3];
}
if(state[6]&&state[6]==state[7]&&state[7]==state[8]){
    return state[6];
}
if(state[0]&&state[0]==state[4]&&state[4]==state[8]){
    return state[0];
}
if(state[2]&&state[2]==state[4]&&state[4]==state[6]){
    return state[2];
}
if(state[0]&&state[0]==state[1]&&state[1]==state[2]){
    return state[0];
}
if(state[3]&&state[3]==state[4]&&state[4]==state[5]){
    return state[3];
}
if(state[6]&&state[6]==state[7]&&state[7]==state[8]){
    return state[6];
}
if(state[0]&&state[0]==state[3]&&state[3]==state[6]){
    return state[0];
}
if(state[1]&&state[1]==state[4]&&state[4]==state[7]){
    return state[0];
}
if(state[2]&&state[2]==state[5]&&state[5]==state[8]){
    return state[0];
}
if(count===9){
    return "draw";
}
}