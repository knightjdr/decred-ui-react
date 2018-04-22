There are several optional animation styles that can be applied to some components by
adding an additional class. These animations are intended to provide visualization
queues. All of the animations have four iteration variants. The default will iterate
5 times, while adding '-one', '-two' or '-infinite' to the end of the class name will
cause the animation to loop once, twice or infinitely respectively. If the effect
has an associated color and you want that to match the theme of your component,
add '-themeName' to the end of the class name.

<strong>Pulse (class: decred-ui-pulse)</strong>

```jsx
<div className="wrapper large-margin">
  <RoundButton className="decred-ui-pulse-infinite" />
  <RectangularButton className="decred-ui-pulse-infinite-darkOnTurquoise" theme="darkOnTurquoise" />
  <RoundButton className="decred-ui-pulse-infinite-oneColorPositive" theme="oneColorPositive" />
  <RectangularButton className="decred-ui-pulse-infinite-primaryBlue" theme="primaryBlue" />
  <RoundButton className="decred-ui-pulse-infinite-turquoiseOnBlue" theme="turquoiseOnBlue" />
</div>
```

<strong>Wiggle (class: decred-ui-wiggle)</strong>

```jsx
<div className="wrapper large-margin">
  <RoundButton className="decred-ui-wiggle-infinite" />
  <RectangularButton className="decred-ui-wiggle-infinite" />
</div>
```
