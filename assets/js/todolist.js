 var array =[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];
 var html = "";
 for (var i =0; i<array.length;i++){
  var dato_1 = array[i];
  var s = "<div>" +  "<label>"+"<input type='checkbox'>"+
    "<td>" + "<strong>"+ dato_1.title + dato_1.completed + "</strong>"+ "</td>"+ "</input>"+"</label>"+
  "</div>";
  html += s;
 }
document.getElementById("listaCreada").innerHTML=html;

 var toDoList = []; 
 function add() {
    var list = document.getElementById("list").value;
    toDoList.push(list);
    var respuesta = "";
    for(i in toDoList){
        respuesta += "<div>" + "<label>"+"<input type='checkbox' name='check4'>"+"<td>"+ "<strong>"+toDoList[i] +"</strong>"+"</td>"+"</input>"+"</label>"+ "</div>";
    }
    document.getElementById('respuesta').innerHTML = respuesta;
    list = "";
  }
  console.log(toDoList);

  function tachar(){
      for(i in toDoList){
        respuesta += "<del>" + "<td>"+toDoList[i] +"</td>"+"</del>";
    	document.getElementById('respuesta_tachada').innerHTML = respuesta;
    	list = "";
  }
}


