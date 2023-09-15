import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: white;
    text-align: center;
    cursor: pointer;
    background-color: #3f51b5;
    border: 1px solid #3f51b5;
    border-radius: 4px;
    margin: 15px auto 0;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
     box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    display: block;
  &:hover{
    background-color: #303f9f;
  };
  &:focus{
    background-color: #303f9f;
  }  
`

/* .Button {
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.Button:hover,
.Button:focus {
  background-color: #303f9f;
} */

