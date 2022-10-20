import data from '../data';

function App() {
  return Object.keys(data).map((key) => (
    <Card key={key} name={key} allColors={data[key]} />
  ));
}

function Card(props) {
  return (
    <div>
      <div className="colors-name">{props.name}</div>
      <ul>
        {props.allColors.map((color, i) => (
          <li key={i}>
            <div className="color-box" style={{ background: color }}></div>
            <div className="color-info">
              <span>{i === 0 ? 50 : i * 100}</span>
              <span>{color.toUpperCase()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
