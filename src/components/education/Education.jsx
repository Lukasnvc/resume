import {
  ItemAbout,
  Year,
  RightAbout,
  TitleAbout,
  SubtitleAbout,
} from "./educationStyleComponents";

const Education = ({ yearFrom, yearTo = "Present", title, subtitle }) => {
  return (
    <ItemAbout>
      <Year>
        {yearFrom} - {yearTo}
      </Year>
      <RightAbout>
        <TitleAbout>{title}</TitleAbout>
        <SubtitleAbout>{subtitle}</SubtitleAbout>
      </RightAbout>
    </ItemAbout>
  );
};

export default Education;
