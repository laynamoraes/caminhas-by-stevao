import styled from "styled-components"

export const Containter = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 15px 0;
  display: flex;
  justify-content: center;

  > p {
    color: rgba(30, 30, 30, 0.6);
    font-size: 0.875rem;

    > a {
      color: rgba(30, 30, 30, 0.6);
      transition: all 0.3s ease-in;
    }

    > a:hover {
      color: #1e1e1e;
      font-weight: 500;
    }
  }
`
