import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContentDisplay = styled.h2`
  margin: 0;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
`;

const ContentInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const EditableContent = ({ isEditing, content, onChange, onClick }) => {
  return (
    <ContentContainer>
      {isEditing ? (
        <ContentInput
          type="text"
          value={content}
          onChange={onChange}
          onBlur={onClick}
          autoFocus
        />
      ) : (
        <ContentDisplay onClick={onClick}>{content}</ContentDisplay>
      )}
    </ContentContainer>
  );
};

export default EditableContent;
