import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 60px;
    margin-bottom: 50px;

    @media screen and (min-width: 768px) {
        flex-direction: row;

        margin-top: 100px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        flex-wrap: wrap;

        width: 584px;

        margin-right: auto;
        margin-left: auto;
    }

    @media screen and (min-width: 1440px}) {
        justify-content: center;

        margin-top: 60px;
    }
`;

export const WrapperDiv = styled.div`
    position: relative;

    font-size: 18px;
    font-weight: 500;
    line-height: ${20 / 18};
`;

export const Label = styled.label`
    display: block;

    font-weight: 500;
    font-size: 14px;
    line-height: ${18 / 14};
    color: #8A8A89;

    margin-bottom: 8px;
`;

export const Legend = styled.legend`
    display: block;

    font-weight: 500;
    font-size: 14px;
    line-height: ${18 / 14};
    color: #8A8A89;

    margin-bottom: 8px;
`;

export const InputWrapperDiv = styled.div`
    display: flex;

    font-weight: 500;
    font-size: 18px;
    line-height: ${20 / 18};

    & input:focus-visible {
        outline: 2px solid #3470FF;
    }
`;

export const InputDiv = styled.div`
    position: relative;
`;

const Input = styled.input`
    padding: 14px 24px;

    border: none;
    background-color: #F7F7FB;

    font-weight: 500;
    font-size: 18px;
    line-height: ${20 / 18};

    @media screen and (max-width: 767px) {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
    }
`;

export const MileageLabel = styled.label`
    position: absolute;
    top: 14px;
    left: 24px;
`;

export const FromInput = styled(Input)`
    border-radius: 14px 0 0 14px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-left: 72px;
`;

export const ToInput = styled(Input)`
    border-radius: 0 14px 14px 0;
    padding-left: 52px;
`;

export const Button = styled.button`
    padding: 14px 44px;

    font-weight: 600;
    font-size: 14px;
    line-height: ${20 / 14};
    color: #ffffff;

    background-color: #3470FF;
    border-radius: 12px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #4078fc;
    }

    @media screen and (min-width: 768px) {
        align-self: flex-end;
    }
`;