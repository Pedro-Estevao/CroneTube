import { React, useContext } from "react";
import styled from "styled-components";
import { ColorModeContext, useColorMode } from "./ColorMode";

const StyleSwitch = styled.div`
    background-color: #333333;
    border: 0;
    padding: 3px;
    font-size: 12px;
    width: 50px;
    height: 25px;
    display: flex;
    justify-content: space-around;
    border-radius: 10000px;
    position: relative;
    
    label {
        width: 50px;

        &::before {
            content: "";
            background-color: #fafafa;
            border: 1px solid #333333;
            width: 24px;
            height: 24px;
            border-radius: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            transition: .3s;
            cursor: pointer;
        }
    }

    span {
        display: inline-flex;
        width: 20px;
        height: 20px;
        align-items: center;
        justify-content: center;
    }

    input {
        &[type="checkbox"] {
            display: none;

            &:checked {
                + label {
                    &::before {
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
`;

export default function DarkModeSwitch() {
    const contexto = useContext(ColorModeContext);

    return (
        <StyleSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                contexto.toggleMode();
            }} />
            <label htmlFor="darkmode" className="darkmode-switch">
                <span>D</span>
                <span>L</span>
            </label>
        </StyleSwitch>
    );
}