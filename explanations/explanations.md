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
import Menu from "./Menu/MenuIndex";

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

- Haben kein UI bzw. jsx und bieten nur Funktionalität in deiner Anwendung
- Lässt sich anhand dieser Star Komponente gut erklären:

```js
import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Star() {
  const [starred, setStarred] = React.useState(false);

  function toggle() {
    setStarred((prev) => !prev);
  }

  return starred ? (
    <BsStarFill className="star filled" onClick={toggle} />
  ) : (
    <BsStar className="star " onClick={toggle} />
  );
}
```

- So können wir mit der Komponente den Stern von gefüllt auf nicht gefüllt und andersrum toggeln
- Ziel ist diese Toggle Funktionalität zu extrahieren und mehr reusable zu machen um nicht nur diese Stern Komponente zu toggeln, sondern auch andere Komponenten.
- Dafür erstellt man zuerst einen Context der alle Komponenten umwickelt, damit alle child Komponenten Zugriff auf die states usw haben:

```js
import React from "react";

const ToggleContext = React.createContext();

export default function Toggle({ children }) {
  const [on, setOn] = React.useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
```

- Dann brauchst du eine Komponente die den State toggled:

```js
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }) {
  const { toggle } = React.useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
}
```

- Je nachdem ob der state im Context true oder false ist, brauchst du eine Komponente für beide Fälle
- State ist true:

```js
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleOn({ children }) {
  const { on } = React.useContext(ToggleContext);

  return on ? children : null;
}
```

- State ist false:

```js
import React from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleOff({ children }) {
  const { on } = React.useContext(ToggleContext);

  return on ? null : children;
}
```

- In deiner App kannst du dann diese Komponenten benutzen um bestimmte Elemente anzuzeigen:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- Das coole ist, du hast die Funktionalität einen state von true auf false und andersrum zu wechseln, komplett modular und "reusable" gemacht.
- Kannst jetzt z.B eine "Sidebar" Komponente erstellen und du musst dich nur um das Styling kümmern, die Logik bei einem Button Klick diese zu öffnen, hast du mit der "Headless" Toggle Komponente schon gemacht
- Das Problem ist, es kann sein das du sehr viele Komponente nesten muss um einfache Funktionalität zu erstellen.
- Zum Beispiel wenn wir die Toggle Funktionalität für ein Menu verwenden wollen:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Menu</Menu.Button>
          </Toggle.Button>
          <Toggle.On>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- Man kann die einzelnen Toggle Wrapper nehmen und dann in der entsprechenden Menu Child Komponente die Inhalte wrappen:

```js
import React from "react";
import Button from "../Button/Button";
import Toggle from "../Toggle/index";

export default function MenuButton({ children }) {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
}
```

- Dadurch sehen dann die Compound Components in der App Komponente deutlich cleaner aus:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Toggle from "./components/Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

## useRef

- Können damit einen Wert verändern ohne einen Rerender zu triggern.
- Wird meistens benutzt um manuell das DOM zu manipulieren.

## Render Props

- Eine Parent Komponente kann bestimmen was alles als JSX in einer Child Komponente gerendert werden soll, basierend auf dem state der child Komponente.
- Deswegen auch "render props", wir können mithilfe von props bestimmen was gerendert werden soll
- Hier in der App Komponente wird der Text basierend auf state in der Child Komponente geändert, die Parent Komponente bestimmt wie das JSX auszusehen hat:

```js
import React from "react";
import Decision from "./Decision";

function App() {
  return (
    <div>
      <Decision
        render={(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      />
    </div>
  );
}

export default App;
```

- Die Decision Komponente hat die state Logik und die function um den state zu flippen:

```js
import React from "react";

export default function Decision({ render }) {
  const [goingOut, setGoingOut] = React.useState(false);

  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {render(goingOut)}
    </div>
  );
}
```

- Was heutzutage aber mehr oder weniger der Standard ist, ist es children als render props zu verwenden:

```js
import React from "react";
import Decision from "./Decision";

export default function App() {
  return (
    <div>
      <Decision>
        {(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      </Decision>
    </div>
  );
}

export default function Decision({ children }) {
    const [goingOut, setGoingOut] = React.useState(false)

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {children(goingOut)}
        </div>
    )
}
```

- Um nochmal zurück zum Toggle Beispiel zu kommen, kann man mithilfe von redner props, die headless components Toggle.On und Toggle.Off weglassen und stattdessen die Toggle.Display komponente verwenden:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"

export default function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => (
              <div className={`box ${on ? 'filled' : ''}`}></div>
            )}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const { on } = React.useContext(ToggleContext)
    return children(on)
}
```
