import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
    return (
        <StarWrapper className="text-green">
            <BsStarFill className="star-icon" />
            <span className="rating-number">{rating.toFixed(1)}</span>
        </StarWrapper>
    );
};

export default StarRating;

StarRating.propTypes = {
    rating: PropTypes.number.isRequired
};

const StarWrapper = styled.div`
    position: absolute;
    right: 18px;
    bottom: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .star-icon {
        font-size: 48px;
        color: var(--secondary-color);
        position: relative;
    }

    .rating-number {
        position: absolute;
        top: 53%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: bold;
        color: white;
    }
`;

