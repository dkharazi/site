---
title: "List Rendering"
draft: false
weight: 8
katex: true
---

### Motivating Basic Lists in React
- In most web applications, we'll want to map elements from a large data structure to some html tag
- Obviously, we can manually map elements from an array to tags
- However, this isn't efficient if our data structure is large
- The following is an example of this manual approach, which we don't want to do:

```jsx
function NameList() {
  const names = ['Jack', 'Mike', 'Tim'];
  return (
    <div>
      <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
    </div>
  )
}
```

### Rendering Basic Lists in React
- Using the `map` function, we can map elements from an array to elements in a list
- This list can be represented as its own component
- Then, we'll be able to render any list as a component
- The following is an example of this:

```jsx
function NameList() {
  const names = ['Jack', 'Mike', 'Tim'];
  const nameList = names.map(n => <h2>{n}</h2>);
  return <div>nameList</div>;
}
```

### Rendering Elements as Components
- Typically, we'll have a list of objects, where each object is rendered based on some properties
- In this situation, we'll want to refactor the JSX into separate components
- Then, we'll want to map these components to html tags
- If we have the following array of objects:

```jsx
const people = [
  {
    id: 1,
    name: 'Jack',
    age: 30
  },
  {
    id: 2,
    name: 'Mike',
    age: 25
  },
  {
    id: 3,
    name: 'Tim',
    age: 28
  }
]
```

- We may want to map these objects to html elements
- To do this, we'll want to create components for:
	- Each object
	- The list of objects
- Then, we can map the each object to a component
- These components will then be rendered as a list component:

```jsx
function Person({person}) {
  return(
    <div>
      <h2>
        I am {person.name} and {person.age}.
      </h2>
    </div>
  )
}

function NameList({people}) {
  const list = people.map(p => <Person person={p} />);
  return <div>{list}</div>;
}
```

### Key Property in a List Component
- When the above code is run, a warning will appear
- Specifically, a key property needs to be included for each element within a list component
- Keys identify which items have been changed, added, or removed
- Keys give each element inside an array an identity
- Meaning, they must be unique among sibling elements in an array
- The key property is not accessible via `props`
- In our case, we can assign the key as the index:

```jsx
function Person({person, key}) {
  return(
    <div>
      <h2>
        I am {person.name} and {person.age}.
      </h2>
    </div>
  )
}

function NameList({people}) {
  const list = people.map(p => 
                 <Person key={p.key} person={p} />);
  return <div>{list}</div>;
}
```

### Anti-Pattern of Key Property
- We don't always have a stable ID for key assignment
- In these cases, we may use the item index as a key as a last resort
- But, this approach shouldn't be used if the order of items change
- Specifically, if items are added, removed, or shuffled throughout a list, this approach should not be used
- The following is an example of this:

```jsx
function NameList({people}) {
  const list = people.map((p, idx) => 
                 <Person key={idx} person={p} />);
  return <div>{list}</div>;
}
```

### References
- [Video about the Basics of List Rendering](https://www.youtube.com/watch?v=5s8Ol9uw-yM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=17)
- [Video about Keys in List Rendering](https://www.youtube.com/watch?v=0sasRxl35_8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=18)
- [Video about Indexing Keys for Lists](https://www.youtube.com/watch?v=xlPxnc5uUPQ&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=19)
- [Lists and Keys in React Docs](https://reactjs.org/docs/lists-and-keys.html)
