import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const WrapList = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px red;
  padding: 20px;
  border-radius: 15px;
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px red;
  padding: 20px;
  width: 300px;
  height: 200px;
  margin-right: 50px;
  border-radius: 15px;
`;

export const StyledInput = styled.input`
  display: inline-block;
`;

export const SubmitButton = styled(StyledInput)`
  display: block;
  width: 120xp;
  height: 50px;
`;
