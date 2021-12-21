import styled from "styled-components/native";

//Usado styled components, pois styleSheet tem algumas limitações
export const ContainerwithImageBackgroud = styled.ImageBackground`
  width: 100%;
  max-height: 600px;
  border-radius: 100px;
`;

export const ContainerOverLay = styled.View`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 600px;
`;

export const ContainerMovieInfo = styled.View`
  width: 100%;
  padding: 40px;
`;
