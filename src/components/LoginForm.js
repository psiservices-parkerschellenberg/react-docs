
function LoginForm() {
    return (
        <div className="LoginForm">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-input" />
            </div>
        </div>
    );
}

export default LoginForm;