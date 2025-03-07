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
<img width="1065" alt="Bildschirmfoto 2025-03-07 um 10 14 11" src="https://github.com/user-attachments/assets/1249468e-10e2-4aed-88d4-335f9005f05a" />

- Kann man mit Compound Components das ganze flach halten:
<img width="1065" alt="Bildschirmfoto 2025-03-07 um 10 14 11" src="https://github.com/user-attachments/assets/0cc61fdf-e561-42d8-8da9-d1e3611e1f77" />
