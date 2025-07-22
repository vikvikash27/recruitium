import React from "react";
import { Link } from "react-router";

type Resume = {
  id: string;
  // add other fields as needed
};

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    ></Link>
  );
};

export default ResumeCard;
