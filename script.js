//this is to get id in the HTML
var a=document.getElementById("First_Name");
var b=document.getElementById("Last_Name");
var c=document.getElementById("Roll_no");
var td=document.getElementById("student-list");
var q=document.getElementById("upp");
//add extra data
function btn(){
    const node=document.createElement("tr");
	
    const node1=document.createElement("td");
    const node2=document.createElement("td");
    const node3=document.createElement("td");
	
    const node4=document.createElement("td");
	
    const node5=document.createElement("a");
    const node6=document.createElement("a");
	
    const textNode=document.createTextNode(a.value);
    const textNode1=document.createTextNode(b.value);
    const textNode2=document.createTextNode(c.value);
	
    const textNode3=document.createTextNode("Edit");
    const textNode4=document.createTextNode("Delete");
    
    
    node1.appendChild(textNode);
    node2.appendChild(textNode1);
    node3.appendChild(textNode2);
	
    node5.appendChild(textNode3);
    node6.appendChild(textNode4);
	
	node5.setAttribute("href","#");
	node6.setAttribute("href","#");
	
	node1.setAttribute("id","name");
	node2.setAttribute("id","l_name");
	node3.setAttribute("id","roll");

	
	node5.setAttribute("class","btn btn-warning btn-sm edit");
	node6.setAttribute("class","btn btn-danger btn-sm delete");
	
	node5.setAttribute("onclick","edit()");
	//node5.setAttribute("id","edit()");
	
    
	node4.appendChild(node5);
    node4.appendChild(node6);
	
    node.appendChild(node1);
    node.appendChild(node2);
    node.appendChild(node3);
    node.appendChild(node4);
    //node.appendChild(node5);
    //node.appendChild(node6);
    

    td.appendChild(node);

   
}



//delete data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        alert("Student Data Deleted", "danger");
    }
});
//box open
function edit(){
	console.log("working");
	q.style.display="flex";
}
//box close
function clos(){
	console.log("hello");
	q.style.display="none";
}



function upst(){
	var u_f=document.getElementById("update1");
var u_l=document.getElementById("update2");
var u_r=document.getElementById("update3");

var names=document.getElementById("name");
var l_name=document.getElementById("l_name");
var roll=document.getElementById("roll");

var u_btn=document.getElementById("upd");
	names.innerHTML=u_f.value;
	l_name.innerHTML=u_l.value;
	roll.innerHTML=u_r.value;
}

//Show alert
function ShowAlert(message, className){
    const div = document.createElement("div");
    div.className='alert alert-${className}';

    div.appendChild = (document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
     
    setTimeout(() => document.querySelector(".alert").remove(), 3000)
}
//clear all fields
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollno.").value = "";
    }





