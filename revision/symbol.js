let pwd = Symbol('ramdom');
let pwd2 = Symbol('random'); 

console.log(pwd === pwd2);

let user = {
    name: 'ajay',
    [pwd]: '%SKFGK^%D&A',
    getPassword: function() {
        console.log(this[pwd]);
    }
}

user.getPassword();

console.log(user.pwd);
