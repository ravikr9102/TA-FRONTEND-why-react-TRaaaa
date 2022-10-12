import data from '../data';

function Articles(){
    return (
        <section className="articles-section">
            {data.map((article) => (
                <Card key={article.url} articleInfo={article} />
            ))}
        </section>
    )
}

function Card(props) {
  return (
    <div>
    <figure>
        <img src={props.articleInfo.urlToImage} alt="News Thing"  />
      </figure>
      <h2>{props.articleInfo.title}</h2>
      <p>{props.articleInfo.description}</p>
      <a href={props.articleInfo.url}>Read More</a>
    </div>
  );
}

export default Articles;
