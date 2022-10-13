import data from '../data';

function handleClick(code, emoji) {
  alert(`${code}, ${emoji}`);
}

function App() {
  return (
    <div>
      {data.map((country) => (
        <Card key={country.code} {...country} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <button
        onClick={() => handleClick(props.code, props.emoji)}
        className="btn"
      >
        {props.name}
      </button>
      <p>Flag: {props.emoji}</p>
    </div>
  );
}

export default App;
