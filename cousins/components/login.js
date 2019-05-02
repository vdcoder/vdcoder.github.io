function LoginReducer(state, action) {
    switch (action.type) {
        default:
            throw new Error();
    }
}

function LoginComponent(props) {
    const [state, dispatch] = React.useReducer(LoginReducer, {});
    return (
        <React.Fragment>
            Username: <input/><br/>
            Password: <input/><br/>
            <button onClick={() => alert('hey')}>-</button>
        </React.Fragment>
      );
}
