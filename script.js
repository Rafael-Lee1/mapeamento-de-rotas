const routeInput = document.getElementById("routeInput");
const routeList = document.getElementById("routeList");

function addRoute() {
    const routeText = routeInput.value.trim();
    if (routeText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = routeText;
        routeList.appendChild(listItem);
        routeInput.value = "";
    }
}
