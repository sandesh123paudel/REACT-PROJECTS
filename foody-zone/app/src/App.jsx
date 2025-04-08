import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("!! Error Fetching Data !!");
      }
    };
    fetchFoodData();
  },[]);
  





  if (error) {
    <div>{error}</div>;
  }
  if (loading) {
    <div>Loading.........</div>;
  }

  return (
    <Container>
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

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: red;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      height: 40px;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;


import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("!! Error Fetching Data !!");
      }
    };
    fetchFoodData();
  },[]);
  





  if (error) {
    <div>{error}</div>;
  }
  if (loading) {
    <div>Loading.........</div>;
  }

  return (
    <Container>
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

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: red;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      height: 40px;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;




