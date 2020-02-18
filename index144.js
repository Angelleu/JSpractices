const user={
    userName:'batman',
    password:'Alfred1960ROCKS!'
}
console.log('First output:',user.userName,user.password);
user.userName=user.userName.replace('b','B')
user.password=user.password.replace('1960',' ')
console.log('Second output:',user);
