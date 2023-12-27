import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 60px;
    align-items: stretch;
    overflow: hidden;
    height: 100vh;
    width: calc(100% - 80px);
    @media(max-width: 900px){
        margin-top: calc((100vh - 400px) / 2);
    }
`