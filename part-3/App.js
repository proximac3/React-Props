const App = () => {
    return (
        <div>
            <Person name="Siren" age={19} hobbies={['theater', 'fantasy', 'fantasitical'] } />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
