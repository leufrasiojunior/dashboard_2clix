import styled from 'styled-components';

export const ContainerModal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0,0.7);
    z-index: 1000;
    color: white;
    h2{
        display:flex;
        align-items: center;
        padding: 30px;
    }
`