let myLeads = ["www.awesomelead.com"];
myLeads = JSON.stringify(myLeads)
myLeads.push("www.sdffsdf.com")
console.log(myLeads);
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {

 myLeads.push(inputEl.value);
 renderLeads();
 inputEl.value = "";
})
function renderLeads() {
 let listItem = ""
 for (let i = 0; i < myLeads.length; i++) {
  listItem += `<li id='li-el'>
<a target ='_blank' href='${myLeads[i]}'>
  ${myLeads[i]}
</a>
</li>`;
 }
 ulEl.innerHTML = listItem
}





