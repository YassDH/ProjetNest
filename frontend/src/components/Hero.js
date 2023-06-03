import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
      <h1>
          Welcome <br />
          To Dari Deco
        </h1>
        <p>
        Your destination for stylish and functional home furniture.
        Let's dive into our website and choose your own furniture!
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="table" className="main-img" />
        <img src={heroBcg2} alt="person" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 4.7rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.8rem;
    }
    .hero-btn:hover {
      transform: scale(1.2);
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius-rounded);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translate(-50%, 20%);
      border-radius: var(--radius-rounded);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -7%;
      border-radius: var(--radius-rounded);
    }
    .img-container::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      border: 3px solid var(--clr-primary-2);
      bottom: -8%;
      left: 8%;
      border-radius: var(--radius-rounded);
      z-index: -5;
    }
  }
`;

export default Hero;