const inputBox=document.getElementsByClassName("input-box");
const noteContainer=document.getElementById("note-container");
const creatBtn=document.getElementById("creat-btn");
const deleteBtn=document.getElementsByClassName("delete-btn");
creatBtn.addEventListener("click",creat)

function creat(){
    console.log("hello");
    const div=document.createElement("div");
   const p= document.createElement("p");
   div.classList.add("input-box");
   p.setAttribute("contenteditable","true");
   
   p.textContent="->";
   p.addEventListener("input", saveNote);
   const img=document.createElement("img");
   img.src="images/bin.png";
   img.classList.add("delete-btn")
   noteContainer.appendChild(div).appendChild(p);
   div.appendChild(img);
   saveNote();
}  
console.log("Restoring notes:", localStorage.getItem("note"));


noteContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveNote();
    }
});
function saveNote(){
    localStorage.setItem("note", noteContainer.innerHTML);
}
function showNote(){
    noteContainer.innerHTML=localStorage.getItem("note") || " ";
    const allNotes = noteContainer.getElementsByClassName("input-box");
    Array.from(allNotes).forEach(note => {
        note.addEventListener("input", saveNote);
})
};
showNote();
