import styled from "styled-components";
import { colors } from "../../theme/theme";


const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    color: ${colors.darkBlue};
    font-weight: 700;
  }
  p {
    font-size: 1.5rem;
    color: ${colors.darkBlue};
    font-weight: 700;
  }
`;

const NotFound = () => {
  return (
    <ContentContainer>
      <h1>404</h1>
      <p>Page not found</p>
    </ContentContainer>
  );
};

export default NotFound;
