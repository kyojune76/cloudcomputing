import React from "react";
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
