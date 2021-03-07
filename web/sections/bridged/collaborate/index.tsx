import React from 'react'
import SectionLayout from 'layout/section'
import { Flex, Heading, Text } from 'rebass'
import styled from "@emotion/styled";
import Icon from 'components/icon';
import { ThemeInterface } from 'utils/styled/theme';
import { media } from 'utils/styled/media';
import BlankArea from 'components/blank-area';
import Image from 'next/image';

const Collaborate = () => {
  return (
    <SectionLayout variant="content-overflow-1" alignContent="start" backgroundColor="rgb(0,0,0,0)">
      <Flex mt="20px" mx="20px" flexDirection={["column", "column", "row", "row"]}>
        <SyncIcon name="loading" mr="10px" />
        <Heading fontSize={["32px", "64px"]} dangerouslySetInnerHTML={{ __html: "Collaborate<br/>as the<br/>way it should be" }} />
      </Flex>
      <Description fontSize={["21px", "21px", "21px", "24px"]}>
        Create your products effecient, fast, and the way it makes sence liike never befor. //Using prototyping tools. Once modified, your work gets broken... Who wants that? Design with Bridged, which lasts. Designed your screen, connected a button, watched it work on your phone. But production? That’s just starting from scratch
      </Description>
      <BlankArea height={50} />
      <SectionLayout variant="full-width" inherit={false}>
        <BackgroundImage>
          <div className="background-img">
            <Image
              src="/assets/collaborate-background-img.png"
              width="100%"
              height="100%"
              alt="collaborate-background-img"
            />
          </div>
          <div className="notifications">
            {[...Array(3)].map((_, ix) => <div className="notification" style={{ right: 10 * ix, bottom: 10 * ix }}>
              <Image
                key="notification"
                src="/assets/notification.png"
                width="auto"
                height="auto"
                alt="notification"
              />
            </div>)}
          </div>
          <div className="application-ui">
            <Image
              src="/assets/application-image-view.png"
              width="auto"
              height="auto"
              alt="application-image-view"
            />
          </div>
        </BackgroundImage>
      </SectionLayout>
    </SectionLayout>
  )
}

export default Collaborate

const SyncIcon = styled(Icon)`
  ${props => media(null, (props.theme as ThemeInterface).breakpoints[2])} {
    width: 64px;
    height: 64px;
  }
`

const Description = styled(Text)`
  margin-top: 36px;
  max-width: 525px;
  color: #444545;
  margin-left: 120px;

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    max-width: 250px;
    margin-left: 20px;
  }

  ${props => media((props.theme as ThemeInterface).breakpoints[0], (props.theme as ThemeInterface).breakpoints[1])} {
    margin-left: 20px;
  }

  ${props => media((props.theme as ThemeInterface).breakpoints[1], (props.theme as ThemeInterface).breakpoints[2])} {
    margin-left: 100px;
  }

  ${props => media((props.theme as ThemeInterface).breakpoints[2], (props.theme as ThemeInterface).breakpoints[3])} {
    margin-left: 120px;
  }
`

const BackgroundImage = styled(Flex)`
  position: relative;

  .background-img {
    background-color: #000;
    div {
      width: 100vw !important;
      height: 55vh !important;
      z-index: 1;
    }
  }

  .notifications {
    position: absolute;
    width: 700px;
    height: 250px;
    transform: translate(55vw, 0px);
    z-index: 3;

    .notification {
      width: 100%;
      height: 100%;
      position: absolute;
      
      div {
        max-width: 690px;
        max-height: 225px;
        width: 90% !important;
        height: 80% !important;
      }
    }
  }

  .application-ui {
    position: absolute;
    width: 100% !important;
    height: 100%;
    bottom: -10%;
    left: 27%;
    z-index: 2;

    div {
        max-width: 350px !important;
        max-height: 1040px;
        width: 100% !important;
        height: 100% !important;
      }
  }

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {

    .notifications {
      transform: translate(50vw, 5vh);
    }

    .notifications > .notification > div {
      width: 50% !important;
      height: 45% !important;
    }

    .application-ui {
      left: 5%;
      bottom: -30%;
    }
    
    .application-ui > div {
      max-width: 280px !important;
      max-height: 600px;
    }
  }

  ${props => media((props.theme as ThemeInterface).breakpoints[0], (props.theme as ThemeInterface).breakpoints[1])} {
    .application-ui {
      left: 5%;
      bottom: -10%;
    }
  }
`