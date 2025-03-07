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
  <img width="500" alt="Bildschirmfoto 2025-03-07 um 10 19 23" src="https://github.com/user-attachments/assets/fb8a9669-d185-4871-a28b-9d67cdcf2044" />

- Kann man mit Compound Components das ganze flach halten:
  <img width="500" alt="Bildschirmfoto 2025-03-07 um 10 20 50" src="https://github.com/user-attachments/assets/d817841a-8518-4135-bc99-e0c9571dba8d" />

- Mann muss nicht alle Komponenten einzeln importieren und kann mit der "dot syntax" eine seperate index Datei erstellen, in der man eine Komponente wie ein object mit weiteren properties erweitert und dieses dann exportiert:

```js
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

Menu.Button = MenuButton;
Menu.Dropdown = MenuDropdown;
Menu.Item = MenuItem;

export default Menu;
```

- Dadurch müssen wir nur eine Komponente importieren

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu/Menu";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map((sport) => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

## Headless Components
