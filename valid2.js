var formRules = ["lengthPwdRule","capPwdRule","lowPwdRule","numPwdRule","symPwdRule"];
var formPatterns = {
        "capPwdRule": /[A-Z]/,
        "lowPwdRule": /[a-z]/,
        "numPwdRule": /[0-9]/,
        "symPwdRule": /[\*\&\%\$\@\#]/
};
window.onload = (function() {
    //Emphasize each rule
    formRules.forEach(emphasizeElement);

    //Set callbacks
    document.getElementById("userName").oninput = checkUserName;
    document.getElementById("userEmailTwo").oninput = checkEmailMatch;
    document.getElementById("passwordOne").oninput = checkValidPassword;
    document.getElementById("passwordTwo").oninput = checkPasswordMatch;

});

//Sets an item to red and bold by ID
function emphasizeElement(item)
{
    var itemElem = document.getElementById(item);
    itemElem.style ="color:red; font-weight: bold;";
}

//Sets an item to black, smaller, and italics
function deemphasizeElement(item)
{
    var itemElem = document.getElementById(item);
    itemElem.style ="color:black; font-weight: 100; font-style:italics";
}

//Call server to check user name
function checkUserName(event)
{

}

//Verify emails are matching
function checkEmailMatch()
{
    if(document.getElementById("userEmail").value == document.getElementById("userEmailTwo").value)
    {
        document.getElementById("emailMatch").style.display ="none";
    }
    else
    {
        document.getElementById("emailMatch").style.display ="block";
    }

}

//Verify passwords are matching
function checkPasswordMatch()
{
    if(document.getElementById("passwordOne").value == document.getElementById("passwordTwo").value)
    {
        document.getElementById("passwordMatch").style.display ="none";
    }
    else
    {
        document.getElementById("passwordMatch").style.display ="block";
    }

}

//validate the rules
function checkValidPassword()
{
    var password = document.getElementById("passwordOne").value;
    var bFlagValid = true;
    //Check password length
    if(password.length < 8){
        emphasizeElement("lengthPwdRule");
        bFlagValid = false;
    }
    else deemphasizeElement("lengthPwdRule");

    for( var key in formPatterns)
    {
        if(formPatterns[key].test(password))
            {
                deemphasizeElement(key);
            }
            else{
                bFlagValid = false;
                emphasizeElement(key);
            }
    }

    if(bFlagValid)
    {
        document.getElementById("passwordRules").style.display = "none";
    }
    else
    {
        document.getElementById("passwordRules").style.display = "block";
    }
}