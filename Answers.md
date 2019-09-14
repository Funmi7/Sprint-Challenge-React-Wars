# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library that is used in various forms to create complex, rich user interfaces. 
Facebook had a need to build something that could power their user experiences in such a way that was decoupled and unconcerned when and where the data was received.
React solves the problem of providing a smooth experience for our users, as well as those developing applications,because we have such rich user interfaces today that interact with ever-changing data, users interacting with DOM elements, and lots of animations and events firing, the DOM is certainly doing a lot of work. React is very useful for large scale applications because we need a way to offload a lot of the state (data) that our apps need to use, from the DOM. 
React makes use of the virtual DOM that interacts with the actual DOM for us. We tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so. Beyond that, it will “react” when the state (data) in our app changes, and will update the DOM accordingly.


1. What does it mean to think in react?
thinking in react has to do with how react makes you think about apps as you build them

1. Describe state.

 state is an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

1. Describe props.

Short for properties, props can best be defined as a way of passing data from component to component, basically from parent to child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.
We sync effects in a react component to state or prop changes by making use of the effect hook or the useEffect().
