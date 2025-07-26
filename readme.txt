what are hooks ?
when we used to create react app using functional component then we didnt have access to the state management and lifecycle methods
to access this features we need to use the class components
so this was the problem wtih the functional component
but after introducing react hookd form version 16.8 we can now use state management and other react features wirhtout writing class components
in other words hooks are the functions that make functional components work like class components
easy to use 

benifits of react hooks?
performamce and readability 

what is usesate hook?
usesate is a react hook which creates an state variable which helps us to track state in components and updates the user interface when state changes


what is useeffect hooks?
the use effect hook allows you to perform side effect in your component
some example are
-fetching data from api
-directly updating the dom
-timrers like settimeout and setinterval
useeffect causes re rendering

the set timeout function excecutes the function the function only once after the timeout but it is excuting continously because we are using useeffect wihtout any dependency
so without dependency the function will keep caling the function when there is a chnge in the state
so if we use empty array it will excecute only once whenn the component will be loaded 
when we put count in the array the function willl call the function whenever the state of the count changes
we can put multiple variable in the array

what is useRef hook ?
useref is a react hook that allow us to create mutable variables which will not re render that component
also it is like a container that hold a reference to a dom elememt or store a value that doesnt cause a re render when changed
it is also use for performance optimization by avoiding unnecessary re renders


what is usememo hook?
the react use memo hook returns a memoized value
its like caching a value so that it doesnt need to be recalculated.
useMemo is a React hook that helps you avoid doing the same expensive calculation again and again.
It remembers (memoizes) the result of a function until its dependencies change.
use memo only runs when one of its dependencies gets updated
improves perfomamce like use callback hook.
basic difference is use memo hook returns memoized value
and use callback hook returns memoized function
calculation done message which is consoled is getting printed even when the counter button is clicked 
but the counter button has no relationship with the cubeNum function still its getting excecuted because the counter is a state and weehn ever the state is getting changed the component is getting re rendered therefore the cubeNum is getting excecuted 
so we will use use memo use memo takes callback funstion and  dependencies
so only when the variable number will change the function will excecute not when the component is re rendered


what is use callback hook?
use callback is a react hook that lets you cache a function definiton blw rerenders
it means when we use the use callback hook it doesnt create mutliple instance of same function when re rendered
helps you to memoize function so they dont get recreated on every render
used in passing functions as props to child components to avoid unnecessary re renders of those child components.
cached function
when ever we are clicking click button the child component is re rendering and loging header rerenderd because we are using use state and the state is changing
export default React.memo(Header_callback_hook) if we do this with the child component we can fix that
but when we pass a function as props to the child component the re rendering happens so we will use use callback hook now that was happeing because of referential inequality
when ever the component is re rendered it is creatinig the newfn again as a instance so the child component is also re rendering cuz f1()!=f2();
use callback wont create a new fn it will use the cache function so re rendering issue is gone


what is use context hook ?
use context hook is a react hook that allows you access data from any component without explicitly passing it dwon through props at every level
use to manage global data in the react app
step1 creating context
step2 provinding the context 
step3 consuming the context

creating the context :-
 create a context file and write this
    import { createContext } from "react";

// Create the context
export const Appcontext = createContext();

const ContextProvider = (props) => {
    const phone = "1234567890";

    return (
        <Appcontext.Provider value={phone}>
            {props.children}  {/* Corrected typo */}
        </Appcontext.Provider>
    );
}

export default ContextProvider;

provinding the context:-
    wrap the app component with contextprovider 
    now all the components under app component can access the context data

consuming the context value :-
   const phone=useContext(Appcontext);
   appcontext is the file name
   

    