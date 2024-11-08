const parent=React.createElement("div",{id:"heading"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 Tag in child1 div"),
        React.createElement("h1",{},"I am h1 Tag in child1 div"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 Tag in child2 div"),
        React.createElement("h1",{},"I am h1 Tag in child2 div"),
    ])
]);





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//for understanding
console.log(parent);
console.log(root);