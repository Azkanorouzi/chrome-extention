let myLeads =[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabs = [
  {
    url: "https://github.com/Azkanorouzi"
  }
]
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click" ,function(){

/*   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  }); */
  chrome.tabs.query( {active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })


})

console.log(localStorage)
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
function render(Leads) {
  let listItem = ""
  for (let i = 0; i < Leads.length; i++) {
    listItem += `<li id='li-el'>
<a target ='_blank' href='${Leads[i]}'>
  ${Leads[i]}
</a>
</li>`;
  }
  ulEl.innerHTML = listItem
}
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads)
})
console.log(leadsFromLocalStorage);
inputBtn.addEventListener("click", function () {
 
 myLeads.push(inputEl.value);
 inputEl.value = "";
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 render(myLeads);
})  




