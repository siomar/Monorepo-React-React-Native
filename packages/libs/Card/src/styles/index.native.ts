import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #efefef;
  border-radius: 5px;
  width: 100%;
  height: 200px;
  padding: 40px;

  align-items: center;
  justify-content: center;
`;

export const CardText = styled.Text`
  text-transform:uppercase;
  color: #303030;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardParagraph = styled.Text`
  text-transform:uppercase;
  color: #303030;
  font-size: 12px;
  text-align: center;
`;

export const LinkText = styled.Text`
  text-transform:uppercase;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const LinkRepositorio = styled.TouchableOpacity`
  background-color: #0466c8;
  padding: 15px 50px;
  line-height: 10px;
  margin: 15px;
  border-radius: 5px;
`;
