/*import React from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #959590;
  color: white;
  text-align: center;
  padding: 5px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2px;
  padding: 5px;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: ${(props) =>
    props.isCurrentDay ? "#ff6347" : "transparent"};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 30; // 예시로 30일인 달로 설정

  const getCurrentDay = () => {
    const today = new Date();
    return today.getDate();
  };

  const currentDay = getCurrentDay();

  return (
    <CalendarContainer>
      <Header>November 2024</Header>
      <DaysContainer>
        {daysOfWeek.map((day, index) => (
          <Day key={index}>{day}</Day>
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <Day key={index} isCurrentDay={index + 1 === currentDay}>
            {index + 1}
          </Day>
        ))}
      </DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
*/

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();


  const handleSelectDate = (date) => {
    setSelectedDate(date);
    navigate('/selected-date/${date}');
  };

  const days = [
    "2024/11/01", "2024/11/02", "2024/11/03", "2024/11/04", "2024/11/05",
    "2024/11/06", "2024/11/07", "2024/11/08", "2024/11/09", "2024/11/10",
    "2024/11/11", "2024/11/12", "2024/11/13", "2024/11/14", "2024/11/15",
    "2024/11/16", "2024/11/17", "2024/11/18", "2024/11/19", "2024/11/20",
    "2024/11/21", "2024/11/22", "2024/11/23", "2024/11/24", "2024/11/25",
    "2024/11/26", "2024/11/27", "2024/11/28", "2024/11/29", "2024/11/30"
  ];

  return (
    <CalendarContainer>
      {days.map((date, index) => (
        <DateBox key={index} onClick={() => handleSelectDate(date)}>
          <DateText>{date}</DateText>
        </DateBox>
      ))}
    </CalendarContainer>
  );

};

export default Calendar;


const CalendarContainer = styled.div`
  display: grid;
  grid-template-colums: repect(7, 1fr);
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const DateBox = styled.div`
  width: 156px;
  height: 30px;
  background-color: #8F8E8B;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  opacity: 1;
`;

const DateText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  text-decoration-skip-ink: none;
  color: #fff;
`