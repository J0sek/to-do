const project = (function () {
  const projects = {
    default: [],
  };

  let currentProject = projects.default;

  function addNewProject(name) {
    projects[name] = [];
  }

  function returnCurrent() {
    return currentProject;
  }

  function changeCurrent(list) {
    currentProject = projects[list];
  }

  return { projects, changeCurrent, addNewProject, returnCurrent, projects };
})();

function reloadProjectList() {
  let projectListDOM = document.querySelector(".list-projects");

  /*
		<li class='list-projects-personal'>
			<div class='icon'></div>
			<div class='text'>Personal</div>
			<div class='counter'></div>
		</li>
	*/

  let projectContainerDOM = document.createElement("li");
  projectContainerDOM.classList.add("list-projects");
}

function Item(name, priority, dueDate) {
  function str() {
    return JSON.stringify(this);
  }

  return { name, priority, dueDate, str };
}

/*

click on a project and it loads into the page

set to main by default

when added - add and reload
when removed - remove but don't need to reload

*/

export default project;
