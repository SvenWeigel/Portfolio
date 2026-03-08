let commentarys = [
	{
		text: "Sven bringt regelmäßig eigene Ideen in die Teamarbeit ein und bereichert damit unsere gemeinsame Arbeit. Dabei überzeugt er nicht nur durch kreative Vorschläge, sondern auch durch die Fähigkeit, diese eigenständig und zielorientiert umzusetzen.",
		name: "Valdrin M. - Team Partner"
	},
	{
		text: "Sehr zuverlässiger Entwickler mit Blick für sauberen Code und Benutzerfreundlichkeit. Sven liefert pünktlich und kommuniziert klar über Fortschritte und Entscheidungen.",
		name: "Anna K. - Product Owner"
	},
	{
		text: "Kreative Lösungen und gutes UX-Verständnis. Sven gestaltet Komponenten, die sowohl wartbar als auch zugänglich sind.",
		name: "Lars B. - UX Designer"
	}
];

let currentCommentary = 0;

const commentaryText = document.getElementById("references-commentary-text");
const commentaryName = document.getElementById("references-commentary-name");
const commentaryLeftBtn = document.getElementById("back");
const commentaryRightBtn = document.getElementById("next");
const commentaryPoints = document.querySelectorAll("#commentary-nav-bar .active-point, #commentary-nav-bar .point");

function updateActivePoint() {
    commentaryPoints.forEach((point, index) => {
        point.classList.toggle("active-point", index === currentCommentary);
        point.classList.toggle("point", index !== currentCommentary);
    });
}

function switchCommentary(i){
	currentCommentary = i;
    commentaryText.textContent = commentarys[currentCommentary].text;
    commentaryName.textContent = commentarys[currentCommentary].name;
    updateActivePoint();
}

function nextCommentary(){
    if(currentCommentary < commentarys.length - 1){
        currentCommentary++;
    } else {
        currentCommentary = 0;
    }
    switchCommentary(currentCommentary);
}

function backCommentary(){
    if(currentCommentary > 0){
        currentCommentary--;
    } else {
        currentCommentary = commentarys.length - 1;
    }
    switchCommentary(currentCommentary);
}

switchCommentary(currentCommentary);