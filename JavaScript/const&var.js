const accountId = 14452
let accountEmail = "some@example.com" //fixes scope issues
var pswrd = ""//has some scope issues
let accountState
accountCity = "lhr"

//accountId = 2  not allowed

accountEmail = "xyyz@email.com"
pswrd = "newpassword123"
accountCity = "karachi"

console.log(accountId);

console.table([accountId, accountEmail, pswrd, accountCity, accountState]);
