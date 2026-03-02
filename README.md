1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer : Difference between selectors
          getElementById("id")
          → Selects one element by ID.
          getElementsByClassName("class")
          → Selects all elements with that class.
          querySelector("selector")
          → Selects the first matching element (any CSS selector).
          querySelectorAll("selector")
          → Selects all matching elements.

2. How do you create and insert a new element into the DOM?
   Answer: const div = document.createElement("div");
        div.textContent = "Hello";
        document.body.appendChild(div);
        Create → createElement()
        Add content
        Insert → appendChild() / append()
   
3. How do you create and insert a new element into the DOM?
   Answer: child > parent > document
    Example:
    Click a button inside a div → button event runs first, then div event runs.

4. What is Event Delegation in JavaScript? Why is it useful?
      Answer:  Adding event listener to parent, instead of many children.
        Why useful?
          Better performance
          Works for dynamically added elements
   

5. What is the difference between preventDefault() and stopPropagation() methods?
       Answer:  preventDefault()
        → Stops default browser action
        (example : stop form submit)
        stopPropagation()
        → Stops event from bubbling to parent
