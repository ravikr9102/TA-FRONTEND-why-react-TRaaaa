import data from '../data';

function App() {
  return (
    <>
      {data.map((user) => (
        <Card key={user._id} {...user} />
      ))}
    </>
  );
}

function Card(props) {
  function getFruit(favoriteFruit) {
    switch (favoriteFruit) {
      case 'strawberry':
        return `🍓${favoriteFruit}`;
      case 'banana':
        return `🍌${favoriteFruit}`;
      case 'apple':
        return `🍎${favoriteFruit}`;
      default:
        return '';
    }
  }
  return (
    <div>
      <h1>{props.name}</h1>
      <a href='_#'>{props._id}</a>
      <h2>{props.balance}</h2>
      <p>{props.age}</p>
      <p>{props.eyeColor}</p>
      <p>{props.company}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.gender === 'male' ? '🙋‍♂️' : '🤷‍♀️'}</p>
      {props.isActive ? (
        <p className="color">true</p>
      ) : (
        <p className="color-one">false</p>
      )}
      <p>favoriteFruit:{getFruit(props.favoriteFruit)}</p>
    </div>
  );
}

export default App;
