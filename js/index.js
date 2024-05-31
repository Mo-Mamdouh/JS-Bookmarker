var websiteName=document.getElementById('siteName');
var websiteUrl =document.getElementById('siteUrl');
var bookmarks;
if(localStorage.getItem('link') == null){
    bookmarks=[];
}
else{
    bookmarks=JSON.parse(localStorage.getItem('link'));
    display();
}

function add(){
    var bookmark={
        name:websiteName.value,
        url:websiteUrl.value
    };
   bookmarks.push(bookmark);
   localStorage.setItem('link',JSON.stringify(bookmarks));
   console.log(bookmarks);
   clear();
   display();
}
function clear(){
    websiteName.value=null;
    websiteUrl.value=null
}
function display(){
    var container ='';
    for(var i = 0 ; i<bookmarks.length;i++){
        var x= i+1;
        container+=`
        <tr>
        <th scope="row">${x}</th>
        <td>${bookmarks[i].name}</td>
        <td><a class="btn text-white visit" href="${bookmarks[i].url}" role="button"><i class="fa fa-eye px-1"></i>Visit</a>
        <td><button class="btn text-white delete" onclick="deleteLink(${i});"><i class="fa fa-trash px-1"></i> Delete</button>
        </td>
      </tr>
        `
    }
    document.getElementById('rowData').innerHTML=container;
}
function deleteLink(d){
    bookmarks.splice(d,1);
    display();
    localStorage.setItem('link' ,JSON.stringify(bookmarks))
}
function valid() {
var check = document.getElementById('siteUrl');
var feedback='';
if (check.checkValidity()) {
    add()
    feedback=`
   `
    document.getElementById('feedback').innerHTML=feedback;
} else {
   feedback=`
   <div class="my-2 text-danger">
        <i class="fa fa-warning"></i> Please provide a valid URL.
   </div>`
    document.getElementById('feedback').innerHTML=feedback;

}}
