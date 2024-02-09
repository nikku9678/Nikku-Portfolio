import React from "react";
import nsecImg from '../../assets/nsec_logo.jpeg';
import schoolImg from '../../assets/school.png';
import clgImg from '../../assets/images.png';
import './Education.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AOS from 'aos';
import  { timelineItemClasses } from '@mui/lab/TimelineItem';
function Education() {
  AOS.init({
    duration:650,
  })
  return (
    <div className="edu" data-aos="fade-down">
      <h1>Education</h1>
      <Timeline className="time"  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
      <TimelineItem >
        <TimelineSeparator >
          <TimelineDot color="success"variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="school">
        <div className="logo">
            <img src={nsecImg} alt="" />
          </div>
          <div className="s-info">
            <h2>Netaji Subhash Engineering College Kolkata</h2>
            <p>Bachelor of Technology in CSE</p>
            <p>Passing Year: 2025</p>
            <p>CGPA : 8.73</p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        <div className="school">
          <div className="logo">
            <img src={clgImg} alt="" />
          </div>
          <div className="s-info">
            <h2>A.N College Patna</h2>
            <p>Intermediate in Science</p>
            <p>Passing Year: 2020</p>
            <p>Marks : 83.6%</p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
        <div className="school">
          <div className="logo">
            <img src={schoolImg} alt="" />
          </div>
          <div className="s-info">
            <h2>S S Sansthan Ganguli manigachi Darbhanga</h2>
            <p>Secondary Education (CBSE)</p>
            <p>Passing Year: 2018</p>
            <p>Marks : 80.2%</p>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

export default Education;
