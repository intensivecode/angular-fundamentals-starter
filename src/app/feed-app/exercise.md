# Exercise: feed

In this exercise you will implement a number of components to render a simple "feed".

Implement the components listed below.

- `Feed component`

  Should render a _CardList_ component, passing a list of items as an input.

- `CardList component`

  Should accept a list of items as an input and render corresponding _Card_ components.

- `Card component`

  Return the following markup from the _Card_ component:

  ```html
  <div class="card card-medium">
    <p class="card-title">{{ title.toUpperCase() }}</p>
    <div><img class="card-image" [src]="image" alt="" /></div>
  </div>
  ```

  This component renders the _title_ with uppercase letters.

- OPTIONAL:

  Currently, a _Card_ is rendered with a default width of 350px (see the CSS class _card-medium_ in `styles.css`).

  Make the _Card_ component more flexible by passing an additional _size_ input (should be optional) with one of the following (string) values: **small**, **medium** and **large**.

  The component should **not** contain logic for determining the actual width values, these are set in the CSS file. The component should combine the _size_ input with the CSS classes contained in `styles.css` in a generic fashion.

  If the _size_ input is not provided the component should default to **medium**.
