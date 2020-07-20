//variables

//names to be allocated
//males
var male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
//females
var female = ['Akosua', 'Adowa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

//arithmetic
var dd = '';
var mm = '';
var cc = '';
var yy = '';
var gender = '';
var date = document.getElementById('dateOfBirth');

//submit function
function submit() {
    if (date.value.length == 0) {
        alert("Enter date");
    }
    var fetch = date.value;
    toString(fetch);
    var strBreak = fetch.split('');

    //var for day
    var dOne = strBreak[8];
    var dTwo = strBreak[9];
    var siku = dOne.concat(dTwo);
    toString(siku);
    var dd = siku;
    dd = parseInt(dd);
    console.log(dd);
    //siku is day in swahili

    //var for month
    var mOne = strBreak[5];
    var mTwo = strBreak[6];
    var mwezi = mOne.concat(mTwo);
    toString(mwezi);
    var mm = mwezi;
    mm = parseInt(mm);
    console.log(mm);
    //mwezi is month in swahili

    //var for century
    var cOne = strBreak[0];
    var cTwo = strBreak[1];
    var karne = cOne.concat(cTwo);
    toString(karne);
    var cc = karne;
    cc = parseInt(cc);
    console.log(cc);
    //karne is century in swahili

    //var for year
    var yOne = strBreak[2];
    var yTwo = strBreak[3];
    var mwaka = yOne.concat(yTwo);
    toString(mwaka);
    var yy = mwaka;
    yy = parseInt(yy);
    console.log(yy);
    //mwaka is year in swahili

    //computation
    var dayOfTheWeek = Math.trunc((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    console.log(dayOfTheWeek);

    //gender
    var gender = document.getElementsByName('gender').value;
    // toString(gender);
    //console.log(gender);
    var name = '';
    if (document.getElementById('male').checked) {
        name = male[dayOfTheWeek - 1];
    } else if (document.getElementById('female').checked) {
        name = female[dayOfTheWeek - 1];
    } else {
        alert('Select Gender');
        return;
    }
    document.getElementById('answer').innerText = name;
    // alert(name);

}
