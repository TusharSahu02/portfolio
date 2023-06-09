import React, { useEffect } from "react";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";
function MyService() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainer>
      <img src="/img/waveMyService.svg" alt="" />
      <Container>
        <AboutHeader data-aos="fade-up">
          <div>
            <p className="about">My Service</p>
          </div>
          <div>
            <p className="name">What I Do</p>
          </div>
        </AboutHeader>
        <AboutDetail>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721609.png"
                  alt=""
                />
              </div>
              <p>Web Frontend</p>
            </div>
          </div>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6943/6943969.png"
                  alt=""
                />
              </div>
              <p>App Frontend</p>
            </div>
          </div>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/160/160138.png"
                  alt=""
                />
              </div>
              <p>App Backend</p>
            </div>
          </div>
          <div className="q_data" data-aos="fade-right">
            <div className="q_heading">
              <div>
                <img
                  src="https://static.thenounproject.com/png/2823238-200.png"
                  alt=""
                />
              </div>
              <p>UI/UX Design</p>
            </div>
          </div>
        </AboutDetail>
      </Container>
    </MainContainer>
  );
}

export default MyService;

const Container = styled.div`
  margin-left: 300px;
  margin-right: 300px;
  margin-top: -435px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const AboutHeader = styled.div`
  color: white;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */

  .about {
    font-size: 100px;
    font-family: "HorizonOutlined";
    display: flex;
    opacity: 90%;
    justify-content: center;
    align-items: center;

    letter-spacing: 2px;
    transition: all 0.25s;

    &:hover {
      letter-spacing: 15px;
    }

    @media (max-width: 768px) {
      margin-top: 300px;
      font-size: 35px;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .name {
    font-size: 60px;
    font-family: "Horizon";
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;

    @media (max-width: 768px) {
      margin-top: -30px;
      font-size: 20px;
      margin-left: 0;
      /* margin: 0; */
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
const MainContainer = styled.div`
  img {
    background: linear-gradient(90deg, #25274d, #46344e);
  }
  height: 600px;
  background-color: #f3f4f5;
`;

const AboutDetail = styled.div`
  margin-top: 220px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    margin: 100px;
    /* flex-flow: column; */
  }
  p {
    font-family: "Roboto";
    /* display: hidden; */

    @media (max-width: 768px) {
      font-size: 0.8rem;
      display: none;
    }
  }

  .q_data {
    border: 1px solid white;
    width: 200px;
    border-radius: 50%;
    height: 200px;
    background: #443c68;
    justify-content: center;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      /* width: 0px; */
      height: 100px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  img {
    width: 100px;
    height: 100px;
    background: transparent;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      margin: 5px;
    }
  }
`;
