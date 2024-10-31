// const heading =React.createElement("h1",{},"hello js from react");

// const root1=ReactDOM.createRoot(document.querySelector("#root"));
// root1.render(heading);

/* <div id="parent">
    <div id="child">
        <h1>hello from react</h1>
    </div>
</div> */

import  React from "react";
import ReactDOM from "react-dom/client";


// const p=React.createElement("div",
//     {id : "parent"},
//     React.createElement("div",
//         {id: "child"},
//        [React.createElement("h1",{},"hello from react from jamshedpur"),
//         React.createElement("h2",{},"hello from react from jsr"),
//         React.createElement("h1",{},"hello from react from jamshedpur")
//        ]
//     )
// );


//jsx 

//react element
const p=(<div id="parent">
           <h1>hello world from jsx </h1>
</div>);

//react component
//react functonal component

const Title=()=>(
<h1 className="title">title from js </h1>
);

const Heading =()=>(
    <div className="head">
    <Title/>      {/* this is called component composition */}
        <h1>heading from js</h1>
    </div>
);



//react component
// const Para=()=>{
// return <h1> 
// <h2>bye</h2>
// hello world | Eram Faiz sem3</h1>
// };

const Para=()=><h1>
    <h2>hello </h2>
    Bye</h1>



const r=ReactDOM.createRoot(document.querySelector("#root"));
r.render(<Para/>);

