import React from "react";
import PropTypes from "prop-types";
import "./Statistics.scss";

const Statistics = ({ title, stats }) => (
<section className="statistics">
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id} style={{ backgroundColor: randomColor() }}>
        <span class="label">{label}</span>
        <span className="percentage">{percentage}%</span>
        </li>
      ))}
  </ul>
</section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
  ).isRequired,
};

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  
     return rgb;
}

export default Statistics;