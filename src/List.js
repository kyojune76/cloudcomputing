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
  border-bottom: 1px solid #ddd;
  text-align: center;
  position: left;
  cursor: pointer;
`;

const TableHeaderCell = styled.th`
  border-bottom: 2px solid #ddd;
  text-align: center;
`;

const List = ({ diaries, onToggleOrder, onDiaryClick }) => (
  <TableContainer>
    <TableHeader>
      <h2>목록</h2>
      <SortButton onClick={onToggleOrder}>↕️</SortButton>
    </TableHeader>
    <DiaryTable>
      <thead>
        <tr>
          <TableHeaderCell />
          <TableHeaderCell>일기</TableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {diaries.map((diary, index) => (
          <tr key={index} onClick={() => onDiaryClick(diary)}>
            <TableCell>{index + 1}</TableCell>

            <TableCell center>{diary.text || "Untitled"}</TableCell>
          </tr>
        ))}
      </tbody>
    </DiaryTable>
  </TableContainer>
);

export default List;
