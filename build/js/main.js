var dataList=document.getElementById("json-datalist"),input=document.getElementById("ajax"),request=new XMLHttpRequest;request.onreadystatechange=function(e){if(4===request.readyState)if(200===request.status){var t=JSON.parse(request.responseText);t.forEach(function(e){var t=document.createElement("option");t.value=e.City,dataList.appendChild(t)}),input.placeholder="Введите или выберите из списка"}else input.placeholder="Что-то пошло не так. Проверьте соединение с интернетом и попробуйте еще раз :( :("},input.placeholder="Loading options...",request.open("GET","../assets/kladr.json",!0),request.send();