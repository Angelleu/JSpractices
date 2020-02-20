const user={
    username:'batman',
    password:'Alfred1960ROCKS!',
    shouldOpenBatCave:function(username,password){
        if(username === 'batman' && password === 'Alfred1960KPO!'){
            console.log('Welcome back batman!!')
            return true;
        }else{
            console.log('Sorry, you can\'t enter the Batcave, try again..')
            return false;
        }
    }
}
user.shouldOpenBatCave('batman','Alfred1960ROCKS!');
   /* if(user.userName==='batman' &&
     user.password==='Alfred1960ROCKS!'){
        console.log(`Welcome back batman!!`);
    }else{
        console.log(`Sorry, you can't enter the Batcave, try again..`);
    }*/