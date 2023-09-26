import React from "react";
import styled from "styled-components";
import CarouselShow from "../layouts/CarouselShow";
import { homePageShowCaseCard ,homePageFilterLabel, sampleData} from "../../data";
import ShowCaseHomePageCard from "../layouts/ShowCaseHomePageCard";
import HomePageFilterLabel from "../layouts/HomePageFilterLabel";
import Product from "../layouts/Product";

const Container = styled.div`
  width: 100%;
`;
const SectionOne = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 3rem 0;
`;

const HomePageFilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 3rem 0;
grid-gap: 2rem;
`
const ProductRow = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2rem;
`

export default function HomePage() {
  return (
    <Container>
      <CarouselShow />
      <SectionOne>
        {homePageShowCaseCard.map((item, i) => (
          <ShowCaseHomePageCard item={item} key={i} />
        ))}
      </SectionOne>
      <HomePageFilterContainer>
        {homePageFilterLabel.map((item, i)=>(
          <HomePageFilterLabel item={item} key={i} />
        ))}

      </HomePageFilterContainer>
      <ProductRow>
        {sampleData.map((item,i)=>(
          <Product item={item} key={i} />
        ))}
      </ProductRow>
    </Container>
  );
}
