let xhr = new XMLHttpRequest();
 xhr.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/auth2/login');
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.onprogress = () => {
   console.log('cargando');
 }
 xhr.onload = () => {
     if (xhr.status === 200) {
         let response = JSON.parse(xhr.responseText);
         console.log(response);
            let session = response.data.Session,
            token =  response.data.access_Token;
            console.log(session,token);
            sessionStorage.setItem('vl1',session);
            sessionStorage.setItem('vl2',token);
     }
 }
 xhr.send(JSON.stringify({
   "Login": "Ahumadaladmin",
   "Password":"lahumada123456%"
 }))
const data  = (inputDay,inputMonth,inputYear,inputNights,inputRooms,inputAdult,inputChildren) =>{   
//  let inputs= [...document.querySelectorAll('[name=data]')],
//  values =  inputs.map(val => val.value);
    let xhr2 = new XMLHttpRequest();
        console.log(sessionStorage.getItem('vl2'),sessionStorage.getItem('vl1'));
        xhr2.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/Search/List');
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.setRequestHeader('X-SESSION',sessionStorage.getItem('vl1'));
        xhr2.setRequestHeader('Authorization',sessionStorage.getItem('vl2'));
        sessionStorage.clear('vl1');
        sessionStorage.clear('vl2');
        xhr2.onprogress = () => {
        console.log('cargando');
        }
        xhr2.onload = () => {
            if (xhr2.status === 200) {
                let response = JSON.parse(xhr2.responseText);
                console.log(response);
            }
        }
        xhr2.send(JSON.stringify({
            "culture":"ES", "pageNumber":"1","cityId":29,"day":inputDay,"month":inputMonth,"year":inputYear,"nights":inputNights,"rooms":inputRooms,"adult":inputAdult,"children":inputChildren
            // "culture":"ES", "pageNumber":"1","cityId":29,"day":26,"month":4,"year":2018,"nights":2,"rooms":1,"adult":1,"children":0
        }))
    }
const getDataValue = () => {
    let inputDay = document.getElementById('day').value,
    inputMonth = document.getElementById('month').value,
    inputYear = document.getElementById('year').value,
    inputNights = document.getElementById('nights').value,
    inputRooms = document.getElementById('rooms').value,
    inputAdult = document.getElementById('adult').value,
    inputChildren = document.getElementById('children').value;
    return {inputDay,inputMonth,inputYear,inputNights,inputRooms,inputAdult,inputChildren};
}
document.getElementById("button-click").addEventListener("click",() => {
    console.log(getDataValue());
    let object = getDataValue();
    data(object.inputDay,object.inputMonth,object.inputYear,object.inputNights,object.inputRooms,object.inputAdult,object.inputChildren);
});