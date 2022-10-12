import data from '../data';
import propTypes from 'prop-types';

function Articles(){
    return (
        <section className="articles-section">
            {data.map((article) => (
                <Card key={article.publishedAt} {...article} />
            ))}
        </section>
    )
}

function Card(props) {
  return (
    <div>
    <figure>
        <img src={props.urlToImage} alt="News Thing"  />
      </figure>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.url}>Read More</a>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  urlToImage: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default Articles;