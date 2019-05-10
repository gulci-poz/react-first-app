class Friend extends React.Component {
    render() {
        const {name, hobbies} = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map((h, i) => <li key={i + '_' + h}>{h}</li>)}
                </ul>
            </div>
        );
    };
}
