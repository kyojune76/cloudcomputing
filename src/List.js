import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  position: relative;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #d8bfd8;
  color: white;
`;

const SortButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiaryTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  background-color: #fff;
  margin-top: 10px;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  border-bottom: 2px solid #ddd;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

const List = ({ diaries, onToggleOrder }) => (
  <TableContainer>
    <TableHeader>
      <h2>목록</h2>
      <SortButton onClick={onToggleOrder}>↕️</SortButton>
    </TableHeader>
    <DiaryTable>
      <thead>
        <tr>
          <TableHeaderCell colSpan="3" />
        </tr>
        <tr>
          <TableHeaderCell />
          <TableHeaderCell center>날짜</TableHeaderCell>
          <TableHeaderCell center>일기</TableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {diaries.map((diary, index) => (
          <tr key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell center>{diary.date}</TableCell>
            <TableCell center>{diary.content}</TableCell>
          </tr>
        ))}
      </tbody>
    </DiaryTable>
  </TableContainer>
);

export default List;
