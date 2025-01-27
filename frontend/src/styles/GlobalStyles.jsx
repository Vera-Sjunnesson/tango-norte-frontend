import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body, html {
  font-family: var(--primary-font-family);
  block-size: fit-content;
  height: 100%;
/*   overscroll-behavior: none; */
  background: var(--primary-background-color);
}
  
h1 {
  font-family: var(--secondary-font-family);
  color: var(--primary-color);
  font-size: 1.7rem;
  font-weight: 900;
  line-height: 35px;
  letter-spacing: -0.408px;
  margin-bottom: 6.5px;

  @media (min-width: 744px) and (max-width: 1279px) {
    font-size: 52px;
    line-height: 51px;
    font-weight: 300;
    color: var(--primary-color);
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    line-height: 51px;
    font-weight: 300;
    color: var(--primary-color);
  }
}
  
  h2 {
    font-family: var(--secondary-font-family);
    font-size: 45px;
    line-height: 60px;
    color: var(--primary-color);
    font-weight: 500;
    padding: 0px 0px 15px;

    @media (min-width: 744px) and (max-width: 1279px) {
      font-size: 52px;
    }
  
    @media (min-width: 1280px) {
      font-size: 60px;
      line-height: 70px;
    }
}
  
h3 {
  font-family: var(--secondary-font-family);
  font-size: 16px;
  line-height: 32.4px;
  color: var(--secondary-color);
}
  
  h4 {
  font-family: var(--secondary-font-family);
  font-size: 40px;
  color: var(--secondary-color);
  font-weight: 700;
  margin-bottom: 10px;
  }

h5 {
  font-family: var(--secondary-font-family);
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 5px;
  color: var(--secondary-color);
  font-weight: 700;
}
  
p {
  color: var(--secondary-color);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;

  @media (min-width: 744px) and (max-width: 1279px) {
  }

  @media (min-width: 1280px) {
  }
}

button {
  font-family: var(--secondary-font-family);
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  cursor: pointer;
  background: transparent;
}

a {
  text-decoration: none;
  font-size: 16px;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
}

article img {
  width: 100%;
  object-fit: cover;
}

.svg-animation {

  @media (min-width: 744px) and (max-width: 999px) {
    min-height: 100% !important;
    height: 100% !important;
  }
  
  @media (min-width: 1000px) and (max-width: 1279px) {
    min-width: 100% !important;
    width: 100% !important;
  }

  @media (min-width: 1280px) {
    min-height: 100vh !important;
    height: 100vh !important;
  }
}
`