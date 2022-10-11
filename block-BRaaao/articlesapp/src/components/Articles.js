import data from "../data"

// function Articles() {
//   return (
//     {data.map((article) => <Card articleInfo={article} />)};
//   )
// }

function Card(props) {
  return (
    <div>
      <figure>
        <img src={props.articleInfo.urlToImage} alt="" />
      </figure>
      <h2>{props.articleInfo.title}</h2>
      <p>{props.articleInfo.author}</p>
      <p>{props.articleInfo.publishedAt}</p>
      <p>{props.articleInfo.description}</p>
    </div>
  );
}


export default Articles;
