function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

function getMood() {
    const moods = ['angry', 'hungry', 'silly', 'quiet', 'paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
    render() {
        const num = getNum();
        const msg = num === 7 ? <p>Good!</p> : <p>Bad</p>;
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello {getMood()}!</h1>
                <p>Your number is {num}. {num === 7 ? 'You\'ve won!' : 'You\'ve lost'}</p>
                {num === 7 ? <p>You've won!</p> : <p>You've lost!</p>}
                {num === 7 && <p>You've won!</p>}
                {msg}
                <Goodbye to="Ringo" from="Paul" data={[1, 2, 3, 4, 5]}/>
                <Goodbye to="Axl" from="Slash" data={[6, 7, 8, 9, 10]}/>
            </div>
        )
    };
}

ReactDOM.render(<Hello/>, document.getElementById('root'));
