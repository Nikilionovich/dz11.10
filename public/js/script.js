const getreq= async(resserv)=>{
const res= await fetch(resserv);
const data =await res.json();
await  crenderSortedAr(data)
}
async function crenderSortedAr(data) {
  const list = document.getElementById("forstudy");
  list.textContent="";
  console.log(data.filteredobj);
  for (const el of data.filteredobj) {
   renderData(el);
  }
}