import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import clipboardCopy from "clipboard-copy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiCopy } from "react-icons/fi";
import text from "../data";

const LoremForm = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = count;
    setData(text.slice(0, amount));
  };

  const copyToClipboard = (text) => {
    clipboardCopy(text);
    toast.success("Text Copied To Clipboard", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="lorem-ipsum-form">
        <Stack gap={3} direction="horizontal">
          <Form.Group className="input-number">
            <Form.Control
              className="me-auto"
              type="number"
              name="amount"
              id="amount"
              min="1"
              max="5"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Generate
          </Button>
        </Stack>
      </form>

      {data.map((item, index) => (
        <p key={index}>
          {item}{" "}
          <button
            className="copy-to-clipboard"
            onClick={() => copyToClipboard(item)}
          >
            <FiCopy />
          </button>
        </p>
      ))}

      <ToastContainer />
    </>
  );
};

export default LoremForm;
