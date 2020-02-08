var getUserID=function(){
    return 50;
}
var isUserValid=function(){
    console.log(getUserID());
    if(getUserID()>30){
        return true;
    }else{
        return false;
    }
}
if(isUserValid()){
    console.log(`User valid`);
}else{
    console.log(`User not valid`);
}
