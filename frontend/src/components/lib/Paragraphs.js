import styled from 'styled-components';

export const FeaturedParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 25px;
  width: 100%;
  color: #ffffff;

  @media (min-width: 744px) and (max-width: 1279px) {
    padding: 0;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 0;
    width: 100%;
  }

  & em {
    font-weight: 900;
  }
`

export const StyledParagraph = styled.p`
  font-weight: 500;
  display: inline-block;

  & em {
    font-weight: 900;
  }
`

export const StyledParagraphBold = styled.span`
  font-weight: 700;
  color: #222222;
  display: inline-block;

  & em {
    font-weight: 900;
  }
`

export const ListParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  width: 100%;
  font-family: 'tablet-gothic', sans-serif;
  font-size: ${(props) => (props.$day ? '16px' : '')};

  & em {
    font-weight: 900;
  }

    @media (min-width: 744px) and (max-width: 1279px) {
      overflow-wrap: normal;
      width: auto;
    }

    @media (min-width: 1280px) {
      overflow-wrap: normal;
      width: auto;
      max-width: ${(props) => (props.$news ? '' : '561.711px')};
    }
`

export const ListParagraphNews = styled(ListParagraph)`
  -webkit-line-clamp: 2;
`