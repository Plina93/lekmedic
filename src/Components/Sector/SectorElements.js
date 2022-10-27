import styled from "styled-components";

export const SectorContainer = styled.div`
  background: ${({lightBackground}) => (lightBackground ? '#ffffff' : '#B0C4DE')};

  @media screen and (max-width: 850px) {
    padding: 100px 0;
  }
`

export const SectorWrapper = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;
`

export const SectorRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({leftPosition}) => (leftPosition ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 850px) {
    grid-template-areas: ${({leftPosition}) => (leftPosition ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 20px 20px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: darkblue;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Subtitle = styled.p`

  margin-bottom: 35px;
  font-size: 1.2rem;
  line-height: 24px;
  color: darkblue
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  justify-content: center;
`

export const Img = styled.img`
  width: 90%;
  margin: 20px;
`