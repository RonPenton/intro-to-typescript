// define a read-only version of an existing interface

interface Person {
    firstName: string,
    lastName: string
}

// Define a complex type that turns all properties to immutable
type Immutable<T> = {
    readonly [P in keyof T]: T[P];
};

// Define an instance of an immutable person
const immutablePerson: Immutable<Person> = {
    firstName: "Alan",
    lastName: "Bean"
};

// now we cannot alter the properties!
immutablePerson.firstName = "Al";


// Can change property types too
type Flags<T> = {
    [P in keyof T]: boolean;
}

const personFlags: Flags<Person> = {
    firstName: true,
    lastName: "Bean"    // not valid, all properties are boolean. 
};



// Use unions to merge interfaces
type Loggable<T> = T & {
    log: () => void
};

function makeLoggable<T>(o: T): Loggable<T> {
    (<any>o)["log"] = () => { console.log(`logged: ${JSON.stringify(o)}`); }
    return <Loggable<T>>o;
}

const alBean: Person = {
    firstName: "Alan",
    lastName: "Bean"
};

const loggablePerson = makeLoggable(alBean);
loggablePerson.log();



// Discriminated Unions allow for JSON-subclassing
interface TextMenuItem {
    kind: "text",
    caption: string
}
interface SwitchMenuItem {
    kind: "switch",
    caption: string,
    onByDefault: boolean
}
interface SubMenuItem {
    kind: "submenu",
    caption: string,
    submenus: MenuItem[]
}

type MenuItem = TextMenuItem | SwitchMenuItem | SubMenuItem;


function renderItem(menuItem: MenuItem): void {
    switch (menuItem.kind) {
        case "text":
            renderTextItem(menuItem);
            console.log(menuItem.caption);
            return;
        case "switch":
            renderSwitchItem(menuItem);
            console.log(menuItem.onByDefault);
            return;
        case "submenu":
            renderSubMenuItem(menuItem);
            console.log(menuItem.submenus);
            return;
        default:
            console.log(menuItem);
    }
}

function renderTextItem(item: TextMenuItem) {}
function renderSwitchItem(item: SwitchMenuItem) {}
function renderSubMenuItem(item: SubMenuItem) {}