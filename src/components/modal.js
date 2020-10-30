import React from "react";
import styled from "styled-components";

// React popup library as helper
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//? Custom modal component
// title: string
// content: string
// trigger: string: message on open button
// action: function: what happens on action button press
// actionText: string: text of action button

const Modal = ({ title, content, trigger, action, actionText }) => {
  return (
    <StyledPopup
      trigger={<button className="button">{trigger}</button>}
      position="center center"
      modal
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">{title}</div>
          <div className="content">{content}</div>
          <div className="actions">
            <button className="button" onClick={() => action()}>
              {actionText}
            </button>

            <button className="button" onClick={() => close()}>
              Chiudi
            </button>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};

export default Modal;

const StyledPopup = styled(Popup)`
  &-overlay {
  }

  &-content {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
    position: relative;
    border-radius: 4px;
    padding: 15px;

    .button {
      background: ${(props) => props.theme.beige};
      color: ${(props) => props.theme.text};
      font-size: 0.9rem;
      border: none;
      padding: 9px;
      margin: 0 10px 0 0;

      &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
        transition: all ease-in-out 0.2s;
      }
    }

    .modal {
      .close {
        position: absolute;
        right: 0;
        background: ${({ theme }) => theme.beige};
        border: none;
        padding: 5px 10px;
        margin-right: 15px;
      }
      .header {
        font-size: 1.7rem;
        font-family: "DM Sans";
        font-weight: 400;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 0 5px 0;
        text-align: center;
      }
      .content {
        padding: 15px 0 0 0;
        font-size: 1.15rem;
        font-family: "Roboto";
        font-weight: 400;
        line-height: 125%;
      }
      .actions {
        padding: 25px 0 0 0;
      }
    }
  }
`;
