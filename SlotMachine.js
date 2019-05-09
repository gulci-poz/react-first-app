function genNum(slots) {
    return Math.floor(Math.random() * slots) + 1;
}

function getEmoji(slot) {
    switch (slot) {
        case 1:
            return <span>&#x2764;</span>;
        case 2:
            return <span>&#x1f4a3;</span>;
        case 3:
            return <span>&#x1f435;</span>;
    }
}

function populateSlot(slots) {
    return getEmoji(genNum(slots));
}

class SlotMachine extends React.Component {
    render() {
        let slots = this.props.slots;
        const items = Array.from({length: slots}, () => populateSlot(slots));

        const itemsAreEqual = (items[0].props.children === items[1].props.children) &&
            (items[1].props.children === items[2].props.children);
        const msg = itemsAreEqual ? 'You win!' : 'You loose!';

        return (
            <div>
                {items[0]} {items[1]} {items[2]}
                <p>{msg}</p>
            </div>
        );
    };
}
