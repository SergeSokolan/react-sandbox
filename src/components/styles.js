import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  width: 800px;
  margin: auto;
`;

export const TextEditor = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  border: none;

  background-color: ${props =>
    (props.color === 'primary' && '#8a6ed7') ||
    (props.color === 'blue' && '#256D7B')};

  margin-right: ${props => (props.kind === 'tab' ? '10px' : '0')};

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
`;

export const TabLIst = styled.div`
  padding: 0 10px;
`;

export const Textarea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  border-color: #cacaca;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  min-height: 200px;
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
  width: 100%;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
`;
export const Comment = styled.div`
  display: inline-=block;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e6eeff;
`;

export const TabContainer = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const TabContent = styled.div`
  ${props => !props.isActive && 'display: none;'}
`;

export const Section = styled.div``;
