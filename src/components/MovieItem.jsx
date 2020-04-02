import React from "react";

function Image(props) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w300${props.srcProp}`}
      alt={props.altProp}
    />
  );
}

// function MovieItem(props) {
//   console.log("props = ", props);
//   const {
//     data: { title, vote_average, poster_path: image }
//   } = props;
//   return (
//     <article>
//       <Image srcProp={image} altProp={title} />
//       <h2>{title}</h2>
//       <h3>{vote_average}</h3>
//     </article>
//   );
// }

class MovieItem extends React.Component {
  render() {
    console.log("props = ", this.props);
    const {
      data: { title, vote_average, poster_path: image }
    } = this.props;
    return (
      <article>
        <Image srcProp={image} altProp={title} />
        <h2>{title}</h2>
        <h3>{vote_average}</h3>
      </article>
    );
  }
}

export default MovieItem;
