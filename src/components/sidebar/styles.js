import styled from 'styled-components';

const SidebarStyles = styled.div`
    width: 289px;
    box-shadow: 2px 0 2px -2px grey;
    padding: 3rem;
    background-color: #fff;
`

const SideBarHeader = styled.header`
    color: grey;
    display: flex;
    align-items: center;
    gap: .25rem;

    h2 {
        font-size: 18px;

        svg {
            color: grey;
            vertical-align: middle;
        }
    }
`;

export { SidebarStyles, SideBarHeader }