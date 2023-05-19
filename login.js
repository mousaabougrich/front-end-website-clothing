






var users = [
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

// Play video and remember playback state
