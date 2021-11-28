import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { constants } from "../../constants";
import { RatingSection } from "./styled";

const Ratings = ({ stars }) => {
  return (
    <RatingSection>
      {stars.map((star, index) => {
        if (star) {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              color={constants.colors.secondaryColor}
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarHalf}
              color={constants.colors.secondaryColor}
            />
          );
        }
      })}
    </RatingSection>
  );
};

export default Ratings;
