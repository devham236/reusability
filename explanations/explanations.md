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

- Anstatt eine Baumwurzel Struktur aufzubauen wie hier:
  <img width="400" alt="Bildschirmfoto 2025-03-07 um 10 19 23" src="https://github.com/user-attachments/assets/fb8a9669-d185-4871-a28b-9d67cdcf2044" />

- Kann man mit Compound Components das ganze flach halten:
  <img width="400" alt="Bildschirmfoto 2025-03-07 um 10 20 50" src="https://github.com/user-attachments/assets/d817841a-8518-4135-bc99-e0c9571dba8d" />

## Implicit State (how to pass down state in compound components)
