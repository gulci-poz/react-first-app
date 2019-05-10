class Goodbye extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        to: 'Anonymous',
        data: [3]
    };

    render() {
        return (
            <div>
                <p>Goodbye from {this.props.from} to {this.props.to}{"!".repeat(this.props.data[0])}</p>
            </div>
        );
    };
}
