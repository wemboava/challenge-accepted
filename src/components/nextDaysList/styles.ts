import styled from 'styled-components';

interface PropsData {
  isActivity: boolean;
}

export const Container = styled.div`
  max-width: 85%;
  margin: 40px auto;
  & h4 {
    font-size: 1.3em;
    color: #fff;
  }
`;

export const List = styled.ul``;

export const DayInfo = styled.li<PropsData>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  padding: 0 15px;
  transition: 0.5s;
  font-weight: 500;
  background: ${(props) => (props.isActivity ? '#21ddf3' : '#fff')};
  box-shadow: 0px 2px 8px #1d1c1c33;

  cursor: pointer;

  & + li {
    margin-top: 20px;
  }

  &:hover {
    background: #eee;
  }

  .temperature {
    font-weight: 600;
    display: flex;
    align-items: center;
    &__min {
      font-size: 1.2em;
    }
    &__max {
      font-size: 2em;
      margin-right: 10px;
    }
    &__celsius {
      font-size: 1.1em;
      font-weight: 400;
      margin: -20px 0 0 5px;
      display: block;
    }
  }

  .probability {
    display: flex;
    align-items: center;
    & img {
      width: 25px;
      margin-right: 15px;
    }
    & span {
      font-size: 0.8em;
      font-weight: 500;
    }
  }
`;