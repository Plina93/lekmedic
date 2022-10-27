import React from 'react'
import {Button} from '../Buttons'

import {
    SectorContainer,
    SectorWrapper,
    SectorRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
}
    from "./SectorElements";

const Sector = ({lightBackground, id, leftPosition, headLine, description, buttonLabel, img, alt}) => {
    return (
        <>
            <SectorContainer lightBackground={lightBackground} id={id}>
                <SectorWrapper>
                    <SectorRow leftPosition={leftPosition}>
                        <Column1>
                            <TextWrapper>
                                <Heading>{headLine}</Heading>
                                <Subtitle>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to={'home'}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact={'true'}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </SectorRow>
                </SectorWrapper>
            </SectorContainer>
        </>
    )
}

export default Sector