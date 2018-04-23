//  const getConnection = () =>{
//      const URL =  'http://reservashoteleaswebapi.azurewebsites.net/Api/auth2/login';
//      fetch(URL)
//      .then(response => response.json())
//      .then(response => {
//          response.forEach(e => {
//              draw(e);
//              console.log(response);
//          });
//      });
//  }
// DRAW NEWSLETTER
// const draw = e =>{
//     let bodytable = document.getElementById('tbody'),
//     allData = `
//         <td>${e.id}</td>
//         <td>${e.name}</td>
//         <td>${e.email}</td>
//     `;
//     if(bodytable){
//         bodytable.insertAdjacentHTML('beforeEnd', allData);
//     }
// };
const sendData =  (Login,Password) =>{
        const URL =  `http://reservashoteleaswebapi.azurewebsites.net/Api/auth2/login?Login=${Login}&Password=${Password}`;
        fetch(URL, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(response => console.log(response))
    } 
    const captureform = () =>{
         let Login = "Ahumadaladmin",
         Password = "lahumada123456%";
         let object = {
            Login,
            Password
         }
         sendData(object.Login,
            object.Password);
              console.log(response);
              console.log(true);
    }
    sendData();
// }
// getConnection();