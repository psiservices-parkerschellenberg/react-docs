function Welcome({ user }) {
    return (
        <div>
            <h1>Welcome {user.name}!</h1>
            <p>You are logged in.</p>
        </div>
    );
}

export default Welcome;