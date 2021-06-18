import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(62deg, var(--white) 0%, var(--white) 100%);
  section {
    width: 70px;
    height: 70px;
    border: 8px solid;
    border-color: var(--green) transparent var(--green) transparent;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
    margin-right: 7rem;
  }
  img {
    width: 20%;
    margin-bottom: 5px;
    margin-right: 7rem;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    max-width: 90%;
    align-items: center;

    section {
      margin-left: 10rem;
    }
    img {
      width: 60%;
      margin-left: 10rem;
    }
  }
`;
