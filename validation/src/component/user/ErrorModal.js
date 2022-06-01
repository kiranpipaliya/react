import React from "react";
import ReactDom from "react-dom";
import Button from "../Ui/Button";
import Card from "../Ui/Card";

import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConform} />;
};

const OverlayModal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConform}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConform={props.onConform} />,
        document.getElementById("backfrop")
      )}
      {ReactDom.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onConform={props.onConform}
        />,
        document.getElementById("overlayModal")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
