function CheckPassword(inputtext) 
{ 
var password=  /^[A-Za-z]\w{8,14}$/;
if(inputtext.value.match(password)) 
{ 
alert('Success')
return true;
}
else
{ 
alert('Please check password requirements')
return false;
}
}