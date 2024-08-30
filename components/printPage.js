import styled from "styled-components";

import Actions from "./actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImageList from "./ImageList";
const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export default function PrintPage({ data }) {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Wrapper>
          {Object.values(data).map((entry, i) => {
            return (
              <PrintWrapper key={i}>
                <Header>
                  <Title>{entry.title}</Title>
                  <Actions />
                </Header>
                <PageLayout>
                  <ImageList imagesToRender={entry.images}></ImageList>
                </PageLayout>
              </PrintWrapper>
            );
          })}
        </Wrapper>
      </DndProvider>
    </>
  );
}
