# Exercise: todo

In this exercise you will implement a "todo" Angular application, comprised of components with styling for displaying a form (to create new todos) and rendering a list of todos and their details.

## Part 1: Styling

In this part of the exercise, a couple of components are to be created with proper styling applied. All component folders should be placed inside the todo folder.

### TodoForm

The _TodoForm_ component allows the user to enter a title and create a new todo.

The component's markup:

```html
<form>
  <input name="todo-title" placeholder="What do you need to do?" />
</form>
```

Apply the following styles to the _input_ element:

```css
width: 100%;
background-color: #fff;
padding: 16px;
font-size: 24px;
font-style: italic;
font-weight: 300;
border: none;
```

> (Render _TodoForm_ in _TodoApp_)

### TodoList

A _TodoList_ component that has the sole responsibility to render all the todos. It accepts an input called "todos" from the the _TodoApp_ component. The json file should be imported in _TodoApp_ and passed as an input to _TodoList_.

Create the `Todo` interface in the global _interfaces.ts_ file.

> Look at the todo object structure in `todos.json` to determine how the interface should look like.

It should return this simple markup:

```html
<div>
  <!-- Logic for listing all the todos -->
</div>
```

> (Render _TodoList_ in _TodoApp_ underneath the _TodoForm_)

### Todo

The _Todo_ component renders exactly one todo object.

_Todo_ accepts the `Todo` interface as its input.

> You already solved this in exercise: feed

It returns the following markup:

```html
<div class="container">
  <div class="form-control">
    <input [id]="todo.id" type="checkbox" />
    <label [htmlFor]="todo.id">Todo title goes here...</label>
  </div>
  <button>Delete</button>
</div>
```

- Styles for _container_

  ```css
  padding: 8px 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  ```

- Styles for _checkbox_

  ```css
  appearance: none;
  ```

- Styles for _label_

  ```css
  cursor: pointer;
  display: inline-block;
  padding: 15px 15px 15px 60px;
  user-select: none;
  ```

  In addition, add these CSS properties below to the _label_ styles. Their values should adapt based on the _completed_ of the _Todo_ instance object.

  ```css
  color: /* '#d9d9d9' if completed, otherwise 'initial' */ ;
  text-decoration: ; /* 'line-through' if completed, otherwise 'none' */
  ```

- Styles for _button_

  ```css
  button {
    font-size: 22px;
    color: #cc9a9a;
  }

  button:hover {
    color: #af5b5e;
  }
  ```

Render the list of todos which has been sent down from the _TodoApp_ component to the _TodoList_, which in turn renders each individual _Todo_.

## Part 2: Component state and event handling

### Creating a todo

In order to create a todo with a user-entered title, the following must be implemented:

- Add a _handleSubmit_ event handler that is bound to the _submit_ form event in _TodoForm_. Verify that the event handler is called upon submitting the form (pressing Enter) by logging something, "Submitting" maybe.

- Add a two-way bound state variable, _todoTitle_, that will contain the value of the input field.

- Update `userId` in the `Todo` interface to be optional.

- Upon form submission, create a new todo object and emit the `todoAdded` event, passing the new todo.

- In _TodoApp_, handle the `todoAdded` event and write code that adds a new todo (first) to the list.

  > Don't forget to pass the _$event_ argument

### Deleting a todo

- Upon clicking the delete button, emit the `todoDeleted` event and pass the todo id.

- In _TodoApp_, handle the `todoDeleted` event and write code deletes the todo from the list.

### Update a todo

- Upon clicking on a todo label, emit the `todoUpdated` event and pass the todo id.

- In _TodoApp_, handle the `todoUpdated` event and write code that toggles the completed flag of the todo.

  > When deleting and updating a todo, you have to bubble the event up twice. First from Todo -> TodoList and then from TodoList -> TodoApp. This means double event emitters.
