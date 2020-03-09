1. What problem does the context API help solve?
   Context solves the problem of prop drilling where in, props must be passed down from from parent to child. The context api creates a context object that allows components to get the data they need from this single source.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   - actions tell reducers what "action" to perform and passed the data that is needed for the reducer to do so.

   - reducers make changes to the store by receiving actions and performing manipulations to the state.

   - store holds the state in redux the store is the only place that hold the main state of the application all changes to the state are made on this immutable state indirectly by the reducer, thus the single source of truth.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that is for the entire application allowing the same data to be accessed by any component. This keep the data synced no matter where in the app it needs to be used. This makes it best to be used with large projects that have many components that must shared the same data.

    Component state is accessed by a single component, or can be passed to a child component via props. This make it best used in small apps or for individual component with data that does not need to be used outside of that component.




4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk is a redux middleware, that allows redux action to be asynchronous. Thunk changes the action-creators by allowing it to return and function that dispatches after a promise has resolved.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

    context api is my favorite because, it seemed a little easier to use and because it's built-in to react.
