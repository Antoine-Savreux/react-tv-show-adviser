import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // tableau qui contiendra les étoiles de la note
  const starList = [];
  // constante contenant le nombre d'étoiles pleines
  const starFillCount = Math.floor(rating);
  // constante contenant le nombre d'étoiles à moitié pleines
  const hasStarHalf = rating - starFillCount >= 0.5;
  // constante contenant le nombre d'étoiles vides
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-fill"} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-fill" + i} />);
  }

  return <div>{starList}</div>;
}
