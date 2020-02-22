const user={
    username:null,
    password:null,
    greet:function(){
        if(this.username!==null){
            console.log(`Hello, I'm user ${this.username}`);
        }else{
            console.log(`please assign a username value`);
        }
    },
    updatePassword:function(password){
        this.password = password
    },
    updateUsername:function(user){
        this.username = user 
    }
}
user.greet();
user.updateUsername('Angel')
user.updatePassword('123456789')
user.greet();


/*const user = {
    username: null,
    passowrd: null,
    greet: function() {
        this.username !== null ? console.log(`Hello, I'm user ${this.username}`) : console.log('Please assign a username value');
    },
    updaterUsername : function(userName) {
        this.username = userName;
    },
    updatePassword : function(passWord) {
        this.passowrd = passWord;
    }
}
user.greet();
user.updaterUsername('Sarah');
user.updatePassword('123456test');
user.greet();
*/