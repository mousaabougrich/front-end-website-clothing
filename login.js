






/*var users = [
    { username: 'ali el', password: 'ali123456' },
    { username: 'amine ze', password: '12345678' }
];

function add() {
    var userNameIn1 = document.getElementById('in1').value;
    var passwordIn2 = document.getElementById('in2').value;

    if (passwordIn2.length < 8) {
        document.getElementById('s1').innerHTML = "Password must contain at least 8 characters.";
        return false;
    } else {
        var user = {
            username: userNameIn1,
            password: passwordIn2
        };
        users.push(user);
        console.log(users);

        return false;
    }
}
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

// Play video and remember playback state*/
var users = [{ username:'ali el', password:'ali123456' }, { username:'amine ze', password:'12345678' } ]

var x =document.getElementById("login");
var y =document.getElementById("register");
var z =document.getElementById("btn");
function register(){
x.style.left="-400px";
y.style.left="50px";
z.style.left="110px";

}
function login1(){
x.style.left="50px";
y.style.left="450px";
z.style.left="0px";

}
function add(){

var userNameIn1 = document.getElementById('in1').value;
var passwordIn2 = document.getElementById('in2').value;

if(passwordIn2.length<8){
  document.getElementById('s1').innerHTML = "password must contains 8 characters";
            }else{
                    var user = {};
                    user.username = userNameIn1;
                    user.password = passwordIn2;
                    users.push(user); 
              
                    console.log(users)
            }
         }
         function showPass(){

var passValue = document.getElementById('in4');
if(passValue.type == 'text'){
    passValue.type = 'password';
}else if(passValue.type == 'password'){
    passValue.type = 'text';
}
}
function login(){
            var userNameIn3 = document.getElementById('in3').value;
            var passwordIn4 = document.getElementById('in4').value;
            if(userNameIn3==''){
      document.getElementById('s2').innerHTML = "username must be filled out";
                return false;
            }else if(passwordIn4==''){
    document.getElementById('s2').innerHTML = "password must be filled out";
                return false;
            }
            for(var i=0;i<users.length;i++){
     if(userNameIn3==users[i].username  && passwordIn4==users[i].password){   
                        return true;
                    }
            }
document.getElementById('s2').innerHTML = "password and username do not match";
            return false;
            }
