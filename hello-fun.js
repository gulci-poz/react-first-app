function HelloFun() {
    return React.createElement("div", null, React.createElement("h1", null, "Hello from function!"));
}

ReactDOM.render(<HelloFun/>, document.getElementById('root-fun'));
