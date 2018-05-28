import * as React from 'react';

export class Page extends React.Component {
    render() {
        return (
            <div>
                <header>This is our first React component!</header>
                {List(["Neil", "Buzz", "Mike"])}
                <Counter initial={-5} />
            </div>
        )
    }
}


function List(items: string[]): JSX.Element {
    return (
        <ul>
            {items.map(x => <li>{x}</li>)}
        </ul>
    )
}


interface CounterProps {
    initial: number;
}
interface CounterState {
    value: number;
}
class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { value: props.initial };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.click(1)}>Increment</button>
                <button onClick={() => this.click(-1)}>Decrement</button>
                <button onClick={() => this.click(100)}>MEGA Increment</button>
                <span>Value: {this.state.value}</span>
            </div>
        )
    }

    click(value: number) {
        this.setState({ value: this.state.value + value });
    }
}