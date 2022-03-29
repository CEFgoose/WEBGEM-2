import styled from "styled-components";

export const GEM = styled.div`

    padding-left: .9%;
    padding-right: .3%;
    padding-top:.6%;
    padding-bottom:.5%;
    display: grid;
    grid-template-columns: 80% 20%;
`;

export const EverythingbutTable = styled.div`
    padding-right:.45%;
    padding-left:1%;
    padding-top: 0%;

    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 50% 50%;
    z-index:999;
    // grid-template-rows: 15% 60%;
`;

export const GroupEditorButtons = styled.div`
    display: flex;
`;

export const AddUpdateEditor = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FileButtonsWrapper = styled.div`
    display: flex;
    flex-direction: reverse-row;
    padding: 1%;
    justify-content: center; 
`;

export const UnUploadedEditor = styled.div`
    display: flex;
`;

export const UpDown = styled.div`
    display: flex;
`;

export const TeamTable = styled.div`
    // color:white;
    background-color: rgba(255, 255, 255, 0.92);
    display: flex;
    flex-direction: column;
    border-radius: 0;


`;

export const TeamTableBtns = styled.div`
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    padding: 2%;
    width: 60%;
`;

export const AddUpdateBtns = styled.div`
    display: flex;
    flex-direction: reverse-row;
    padding: 3%;
    justify-content: flex-start;
`;

export const LineandNodeWrapper = styled.div`
    border-top: 2px solid #f4753c;
    display: flex;
    flex-direction: row;
    padding: 1%;
    justify-content: space-between;
`;

export const UnUpLineandNodeWrapper = styled.div`
    border-top: 2px solid #f4753c;
    display: flex;
    flex-direction: row;
    padding: 1%;
    justify-content: space-between;
`;

export const MobileViewWrapper = styled.div`
    display: flex;
    flex-direction: column;  
`;

export const MobileTeamTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MobileLineandNodeWrapper = styled.div`
    border-top: 2px solid #f4753c;
    display: flex;
    flex-direction: row;
    padding: 1%;
    justify-content: space-between;
`;

export const MobileUnUpLineandNodeWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;


export const MobileFileButtonsWrapper = styled.div`
    display: flex;
    flex-direction: reverse-row;
    justify-content: space-around; 
`;

export const MobileTeamTableBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 3%;
`;