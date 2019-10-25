import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  width: 100%;
  border-color: #cacaca;
  padding: 10px;
  box-sizing: border-box;
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
  font-size: 12px;
  word-break: break-all;
`;

export const Label = styled.p`
  margin: 5px 0;
  padding: 0;
  font-size: 12px;
  color: gray;
`;

export const Text = styled.p`
  margin: 0 0 5px;
`;

export const CommentList = styled.div`
  width: 50%;
  margin: 0;
  padding: 20px 20px 20px 0;
  box-sizing: border-box;
`;
export const Comment = styled.div`
  display: inline-=block;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e6eeff;
`;
