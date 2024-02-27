var obj=[{
    "product_id":"456789",
    "name":"Relame mobile",
    "price":16000,
},
{
    "product_id":"123456",
    "name":"mi mobile",
    "price":18000,
},
{
    "product_id":"365648",
    "name":"vivo mobile",
    "price":20000,
}

]
var arr_details=["product_id","name","price"];
function fun1(){
var tr;
var td=[];
var div;
var i1;
var i2;
var count =0;
document.getElementById("bdy").innerHTML="";
for(var i=0;i<obj.length;i++){
tr=document.createElement("tr");

for(var j=0;j<3;j++){
td[j]=document.createElement("td");
td[j].innerText=obj[i][arr_details[j]]

}
td[3]=document.createElement("td");
i1=document.createElement("i");
i2=document.createElement("i");
div=document.createElement("div");
div.setAttribute("class","center")
i2.setAttribute("class","fa-solid fa-trash-can")
i1.setAttribute("class","fa fa-pencil");
i1.setAttribute("aria-hidden","true")
i1.setAttribute("id","i"+count);
i2.setAttribute("id","k"+count);


div.append(i1,i2);
td[3].append(div);
tr.append(td[0],td[1],td[2],td[3])
document.getElementById("bdy").appendChild(tr);

count+=1;


}
for(var i=0;i<count;i++){
document.getElementById("i"+i).addEventListener("click",(event)=>{
console.log(event);
edit(event.srcElement)
})
};
for(var i=0;i<count;i++){
document.getElementById("k"+i).addEventListener("click",(event)=>{
console.log(event);
delete_bro(event.srcElement)
})
}
}
function delete_bro(str){
obj.splice(str[1], 1);
fun1();
}


//edit
function edit(str){
if(str.id[0]=="i"){
var ele=document.getElementById(str.id);

ele.setAttribute("class","fa fa-plus");
var tr_bro=ele.parentElement.parentElement.parentElement;
var td1=[];
var count1=str.id[1];
console.log(tr_bro);
for(i=0;i<3;i++){
var data=obj[str.id[1]][arr_details[i]]
td1[i]=document.createElement("td");
var id_text=str.id[1]+"s"+i;
td1[i].innerHTML=`  <input type="text" value=${data} id=${id_text}>`;
}
td1[3]=document.createElement("td");
i1=document.createElement("i");
i2=document.createElement("i");
div=document.createElement("div");
div.setAttribute("class","center")
i2.setAttribute("class","fa-solid fa-trash-can")
i1.setAttribute("class","fa fa-plus");
i1.setAttribute("aria-hidden","true")
i1.setAttribute("id","j"+count1);
div.append(i1,i2);
td1[3].append(div);
tr_bro.innerHTML="";
tr_bro.append(td1[0],td1[1],td1[2],td1[3]);
document.getElementById("j"+count1).addEventListener("click",(event)=>{
console.log(event);
edit(event.srcElement)

})
}
else{
if(str.id[1]<obj.length){
var ele=document.getElementById(str.id);
ele.setAttribute("class","fa fa-pencil");
var tr_bro=ele.parentElement.parentElement.parentElement;
// obj[str.id[1]]["product_id"]=
var abc=tr_bro.childNodes[0];
var encodetext=str.id[1]+"s";
obj[str.id[1]]["product_id"]=document.getElementById(encodetext+0).value;
obj[str.id[1]].name=document.getElementById(encodetext+1).value;
obj[str.id[1]].price=document.getElementById(encodetext+2).value;
console.log(obj)
fun1();
}
else{
var ele=document.getElementById(str.id);
ele.setAttribute("class","fa fa-pencil");
var encodetext=str.id[1]+"s";
var product_id=document.getElementById(encodetext+0).value;
var name=document.getElementById(encodetext+1).value;
var price=document.getElementById(encodetext+2).value;
obj.push({
"product_id":product_id,
"name":name,
"price":price,
})
fun1();
}
}

}
fun1();
document.getElementById("btn1").addEventListener("click",()=>{
var tr=document.createElement("tr");
var td2=[];
var i1,i2,div;
for(i=0;i<3;i++){

td2[i]=document.createElement("td");
var id_text=obj.length+"s"+i;
td2[i].innerHTML=`  <input type="text"  id=${id_text}>`;

}
td2[3]=document.createElement("td");
i1=document.createElement("i");
i2=document.createElement("i");
div=document.createElement("div");
div.setAttribute("class","center")
i2.setAttribute("class","fa-solid fa-trash-can")
i1.setAttribute("class","fa fa-plus");
i1.setAttribute("aria-hidden","true")
i1.setAttribute("id","j"+obj.length);
div.append(i1,i2);
td2[3].append(div);
tr.append(td2[0],td2[1],td2[2],td2[3]);
document.getElementById("bdy").append(tr);
document.getElementById("j"+obj.length).addEventListener("click",(event)=>{
console.log(event);
edit(event.srcElement)

})
})