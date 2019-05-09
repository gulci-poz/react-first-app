function genNum(slots) {
    return Math.floor(Math.random() * slots) + 1;
}

function getEmoji(slot) {
    let emoji;

    switch (slot) {
        case 1:
            emoji = <span>&#x2764;</span>;
            break;
        case 2:
            emoji = <span>&#x1f4a3;</span>;
            break;
        case 3:
            emoji = <span>&#x1f435;</span>;
            break;
    }

    return emoji;
}

class SlotMachine extends React.Component {
    render() {
        let slots = this.props.slots;
        const itemsNum = Array.from({length: slots}, () => genNum(slots));
        const items = Array.from(itemsNum, (e) => getEmoji(e));

        const itemsAreEqual = itemsNum[0] === itemsNum[1] && itemsNum[1] === itemsNum[2];
        const msg = itemsAreEqual ? 'You win!' : 'You loose!';

        return (
            <div>
                {items[0]} {items[1]} {items[2]}
                <p>{msg}</p>
            </div>
        );
    };
}
