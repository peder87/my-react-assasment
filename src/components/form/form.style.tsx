import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  & form {
    width: 100%;
  }
  & form fieldset {
    display: block;
    margin: 70px auto;
    width: 100%;
    height: 35px;
    position: relative;
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.2);
    border-radius: 35px;
    overflow: hidden;
    display: flex;
  }
  & input {
    transition: background-color .3s ease-out;
    flex-grow: 1;
    border: none;
    font-size:1rem;
    padding: .75rem 1.25rem;
    background-color: transparent;

    &:focus-visible, &:focus {
      outline: none;
    }
    
  }
  & button {
    transition: background-color .3s ease-out;
    background-color: #77ACF1;
    border: none;
    border-radius: 17px;
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: 0px 4px 40px 10px rgba(0,0,0,.2);
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    &:disabled {
      background-color: ${p => p.theme.palette.common.disabled};
      color: ${p => p.theme.palette.common.black};
      &:hover {
        cursor: default;
      }
    }
  }
`