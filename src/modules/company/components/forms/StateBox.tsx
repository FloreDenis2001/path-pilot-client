import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface StatsBoxProps {
  icon: IconDefinition;
  heading: string;
  value: string | number;
  label: string;
  className?: string;
}

const StatsBox: React.FC<StatsBoxProps> = ({ icon, heading, value, label, className }) => {
  return (
    <div className="dashboard__stats__box">
      <div className="dashboard__stats__box__header">
        <FontAwesomeIcon className={className} icon={icon} />
        <h2 className="heading-card">{heading}</h2>
      </div>
      <p>{value}</p>
      <span>{label}</span>
    </div>
  );
};

export default StatsBox;
