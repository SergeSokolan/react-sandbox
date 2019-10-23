import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 600px;
  margin: auto;
`;

export const TextEditor = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  border: none;
  background-color: #8a6ed7;
  padding: 7px 15px 5px;
  text-transform: uppercase;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-color: #cacaca;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Arial';
  font-size: 12px;
  min-height: 200px;
  &:focus {
    outline: none;
  }
`;

export const Preview = styled.div`
  width: 100%;
  background-color: #f1f3fb;
  padding: 5px 10px;
  margin: 20px 0;
  box-sizing: border-box;
  font-family: 'Arial';
  font-size: 12px;
  word-break: break-all;
`;

export const PreviewLabel = styled.p`
  margin: 5px 0 5px;
  padding: 0;
  font-size: 12px;
  color: #cacaca;
`;

export const PreviewText = styled.p`
  margin: 0 0 5px;
`;

export const Comments = styled.div``;
export const Comment = styled.div``;
export const CommentLabel = styled.span``;
export const CommentText = styled.p``;