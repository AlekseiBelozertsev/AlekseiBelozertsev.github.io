
var sidebar = document.getElementById('sidebar');
var showSidebarOnClick = document.getElementById('sidebarShowFolder').addEventListener("click", showSidebar);
var dashboard = document.getElementById('dashboard_main');

function showSidebar() {
  if(sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';   sidebarShowFolder.classList.remove('fa-folder-open')
    sidebarShowFolder.classList.add('fa-folder')
    dashboard.style.marginLeft = '0em'
  } else {
     sidebar.style.display = 'flex';
     sidebarShowFolder.classList.remove('fa-folder')
     sidebarShowFolder.classList.add('fa-folder-open')  
     dashboard.style.marginLeft = '10em'
  } 
}
