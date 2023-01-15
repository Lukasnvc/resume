import "./education.scss";

const Education = ({ yearFrom, yearTo = "Present", title, subtitle }) => {
  return (
    <div className="item-about">
      <span className="year">
        {yearFrom} - {yearTo}
      </span>
      <div className="right-about">
        <h4 className="title-about">{title}</h4>
        <p className="subtitle-about">{subtitle}</p>
      </div>
    </div>
  );
};

export default Education;
