class Goodbye extends React.Component {
    render() {
        return (
            <div>
                <p>Goodbye from {this.props.from} to {this.props.to}!</p>
                <p>{"!".repeat(this.props.data[0])}</p>
            </div>
        );
    };
}
