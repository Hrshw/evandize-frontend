import PropTypes from "prop-types";
const EvRightArrow = ({ fill = "white" }) => {
  return (
    <svg
      width="26"
      height="46"
      viewBox="0 0 26 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.1213 25.1213C26.2929 23.9497 26.2929 22.0503 25.1213 20.8787L6.02944 1.7868C4.85786 0.615224 2.95837 0.615224 1.7868 1.7868C0.615224 2.95837 0.615224 4.85786 1.7868 6.02944L18.7574 23L1.7868 39.9706C0.615224 41.1421 0.615224 43.0416 1.7868 44.2132C2.95837 45.3848 4.85786 45.3848 6.02944 44.2132L25.1213 25.1213ZM22 26H23V20H22V26Z"
        fill={fill}
      />
    </svg>
  );
};

EvRightArrow.propTypes = {
  fill: PropTypes.string,
};

export default EvRightArrow;
