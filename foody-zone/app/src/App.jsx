import styled from "styled-components";

const App = () => {
  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.svg" alt="Logo" />
        </div>

        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Food Items....."
          />
        </div>
      </TopContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  background-color: #323334;
  color: red;
`;

const TopContainer = styled.section``;
