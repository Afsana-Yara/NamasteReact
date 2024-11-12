import React from "react";
import ReactDOM from "react-dom/client";

//Returns a React Element(JS Object) -- jsx will be transpiled by babel into js object--and stored in jsxHeading.
const jsxHeading = <h1 id="heading">Hello Akshay</h1>;
// const jsxHeading2= <h1 className="head" tabIndex="1">Hello Saini</h1>;
// const jsxSingleLine=<h1 className="head">Hello Saini</h1>;//fine
// const jsxSingleLine1=(<h1 className="head">Hello Saini</h1>);//fine
// const jsxMultiLine=(<h1 className="head">
//                     Hello Saini
//                     </h1>);//fine

console.log(jsxHeading);

//React Functional Component
const HeadingComponent = ()=> {
    return <h1 >Hello Akshay</h1>;
}

//shorthand way of writing React Functional Component(Arrow function shorthand)
const HeadingComponent2 = ()=> <h1 >Hello Akshay</h1>;
const HeadingComponent3 = ()=> (<div>
                                <h1 >Hello Akshay</h1>
                                </div>);

//component composition
const TitleComponent = ()=> <h1 >Rendered Title Component</h1>;

const HeadingComponent4 = ()=> (<div><h1>Rendered HeadingComponent Start</h1>
                                <TitleComponent/>
                                <h1 >HeadingComponent End </h1>
                                </div>);
//javascript inside jsx
const number=10;
const DivComponent = ()=> (
                            <div>
                            <h1 >Rendered  Div Component</h1>
                            {number}
                            </div>
                        );

const DivComponent1 = ()=> (
                    <div>
                    <h1 >Rendered  Div Component</h1>
                    {console.log("Hello")}
                    </div>
                    );

const DivComponent2 = ()=> (
                    <div>
                    <h1 >Rendered  Div Component</h1>
                    <h1 >{number}</h1>
                    </div>
                    );
const DivComponent4 = ()=> (
                    <div>
                    <h1 >Rendered  Div Component</h1>
                    <DivComponent/>
                    <DivComponent></DivComponent>
                    {DivComponent()}
                    <h1 >{DivComponent()}</h1>
                    </div>
                    );





const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<DivComponent2/>);