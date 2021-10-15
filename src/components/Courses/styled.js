import styled from "styled-components";
export const CoursesWrapper = styled.div`
  padding-bottom: 5rem;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const CoursesHeading = styled.h1`
  color: var(--primary-color);
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 1rem;
  }
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SearchBar = styled.input`
  width: 20rem;
  border: 1px solid var(--primary-color);
  border-right: none;
  padding: 9px 12px 10px;
  height: 40px;
  outline: none;
  color: var(--primary-color);
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  border-radius: 20px 0 0 20px;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 30px;
  }
  @media only screen and (max-width: 500px) {
    width: 15rem;
  }
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  padding-right: 32px;
  padding-left: 10px;
  border: 1px solid var(--primary-color);
  background: var(--primary-color);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  border-radius: 0 20px 20px 0;
  @media only screen and (max-width: 768px) {
    height: 30px;
    padding-right: 26px;
    padding-left: 8px;
  }
`;

export const CourseGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 4vw 6vw;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  padding: 1rem 1.2rem;
  background-color: #f9fafc;
`;

export const Title = styled.h4`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;
