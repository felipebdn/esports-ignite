import styled from "styled-components";

export const Card = styled.div`
  width: 11.25rem;
  height: 15rem;

  border-radius: 8px;
  position: relative;
  
`

export const InfoGame = styled.div`

  height: 7.5rem;
  padding: 1rem;
  gap: 0.25rem;
  display: block;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
  border-radius: 0px 0px 8px 8px;
  position: relative;
  margin-top: -7.5rem;

  div{
    padding: 0 0 1rem 0;
    margin: 0;    
    position: absolute;
    bottom: 0;

    p{
      font-size: 1rem;
      font-weight: 700;
      position: relative;
      color: #ffffff;
    }
    span{
      margin-top: 0.25rem;
      color: #D4D4D8;      
      font-weight: 400;
      font-size: 0.875;
      line-height: 17px;
      letter-spacing: -0.18px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`