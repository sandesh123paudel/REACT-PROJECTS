import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {foods?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>

              <Button> $ {food.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;

const FoodCard = styled.div``;
