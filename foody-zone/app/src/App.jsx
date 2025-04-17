import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("!! Error Fetching Data !!");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilterData(filter);
    setSelectedBtn(type);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) {
    <div>{error}</div>;
  }
  if (loading) {
    <div>Loading.........</div>;
  }

  return (
    <>
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
              onChange={searchFood}
              placeholder="Search Food Items....."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtn.map((value) => (
            <Button key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}

          {/* <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
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

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
