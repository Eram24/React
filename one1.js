// const heading =React.createElement("h1",{},"hello js from react");

// const root1=ReactDOM.createRoot(document.querySelector("#root"));
// root1.render(heading);

/* <div id="parent">
    <div id="child">
        <h1>hello from react</h1>
    </div>
</div> */

const p=React.createElement("div",
    {id : "parent"},
    React.createElement("div",
        {id: "child"},
       [React.createElement("h1",{},"hello from react from jamshedpur"),
        React.createElement("h2",{},"hello from react from jsr"),
        React.createElement("h1",{},"hello from react from jamshedpur")
       ]
    )
);

const r=ReactDOM.createRoot(document.querySelector("#root"));
r.render(p);

