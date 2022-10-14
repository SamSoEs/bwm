function render() {
    const root = document.getElementById('root');
    var node = document.createElement("DIV");
    var nodeText = document.createTextNode("What a nice day");
    node.appendChild(nodeText);
    root.appendChild(node);
}