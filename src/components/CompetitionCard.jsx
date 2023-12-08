import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompetitionCard = ({ competition = {} }) => {
  return (
    <div className="w-full bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-4 rounded-xl gap-4 hover:scale-105 hover:rotate-3 duration-300 transition-all ">
      <img src={competition.img} alt="Competitions" />
      <h2 className="font-semibold text-3xl">{competition.name}</h2>
      <div className="text-center text-sm">
        {competition.desc.length > 300
          ? competition.desc.slice(0, 300) + "..."
          : competition.desc}
      </div>
      <Link
        to={competition.link}
        className="hover:underline underline-offset-4"
      >
        view all
      </Link>
    </div>
  );
};

CompetitionCard.propTypes = {
  competition: PropTypes.object,
};
export default CompetitionCard;
