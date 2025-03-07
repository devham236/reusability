# Reusablility

## Props spread & rest

- Du kannst alle props die du einer Komponente übergibst in der Komponente spreaden um nicht alle einzeln anzugeben:

```js
export default function Button(props) {
  return <button {...props}>{props.children}</button>;
}
```

- Wie du weißt kann man props destrukturieren, wenn du mit einigen props was genaues "machen möchtest" und den Rest der props anlegen möchtest kannst du mit ...rest das ermöglichen:

```js
export default function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}
```

## Compound Components

- Neben Context API, auch eine Lösung um props drilling zu vermeiden.
- Verwenden children props
- Haben "dedicated functions/styling"
- Es gibt HTML Beispiele bzw. Compound Components in HTML wie list items innerhalb einer unordered oder ordered list, die gewisse styles bekommen.
