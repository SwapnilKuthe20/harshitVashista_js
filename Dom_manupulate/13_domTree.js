
//// :::: DOM TREE ::::

//// Document --> Root Node
//// html --> Root element / child node of document
//// head --> child node of html tag
//// body --> child node of html tag

//// :: console Root node by using getRootNode() ::
const getRootNode = document.getRootNode();
// console.log(getRootNode);           // #document

//// :: to get all childs of node  using childNodes ::

const rootNode = document.getRootNode();
// console.log(rootNode);

const childNodes = rootNode.childNodes;
console.log(childNodes);






