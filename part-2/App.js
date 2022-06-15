const App = () => {
    return (
        <div>
            <Tweet username="rambo" user="ram" date="06-15-22" message="my first tweet"/>
            <Tweet username="The rock" user="dwayne" date="06-15-22" message="rock tweet"/>
            <Tweet username="rakesim" user="rake" date="06-15-22" message="the rake is real"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
