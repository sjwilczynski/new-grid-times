import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryListHorizontalOnTablet>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryListHorizontalOnTablet>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 2fr 1.3fr 1fr;
    gap: 24px 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    border-right: 2px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${(p) => p.theme.queries.laptopAndUp} {
    border-right: 2px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-of-type) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--color-gray-300);
  }
`;

const StoryListHorizontalOnTablet = styled(StoryList)`
  @media ${(p) => p.theme.queries.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    & > :not(:last-of-type) {
      margin-bottom: 0px;
      padding-bottom: 0px;
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${(p) => p.theme.queries.laptopAndUp} {
    border-top: 2px solid var(--color-gray-300);
    padding-top: 24px;
    margin-left: 24px;
  }
`;

export default MainStoryGrid;
