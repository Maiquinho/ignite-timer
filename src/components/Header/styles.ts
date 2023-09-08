import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition:
        color 0.2s,
        border-color 0.2s;
    }

    a:hover,
    a.active {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    a.active:hover {
      color: ${(props) => props.theme['green-500']};
    }
  }
`
