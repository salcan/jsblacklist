document.addEventListener("beforeload", beforeLoadListener, true);

function beforeLoadListener(event) {
	var result = safari.self.tab.canLoad(event, [event.url, event.target.nodeName]);
	if (result == "block") {
		event.preventDefault();
	}
}

