import styled from 'styled-components';

export const Card = styled.div`
  background-color: #efefef;
  border-radius: 5px;
  width: 100%;
  height: 200px;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardText = styled.span`
  text-transform:uppercase;
  color: #303030;
  font-size: 16px;
  margin-bottom: 10px;
`;


export const CardParagraph = styled.p`
  text-transform:uppercase;
  color: #303030;
  font-size: 16px;
  text-align: center;
`;


export const LinkText = styled.span`
  text-transform:uppercase;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const LinkRepositorio = styled.button`
  background-color: #0466c8;
  padding: 15px 50px;
  line-height: 10px;
  margin: 15px;
  border-radius: 5px;
`;
