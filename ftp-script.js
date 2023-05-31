let links = document.getElementsByTagName("tbody")[0].getElementsByTagName("a");

for (let j = 1; j < links.length; j++) {
    let link = links[j];
    let fileName = link.getAttribute("title");
	let isDirectory = link.href.endsWith("/")
    if (fileName && !isDirectory) {
        link.setAttribute("download", fileName);
        link.click()
    }
}