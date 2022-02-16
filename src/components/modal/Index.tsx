/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import Title from "../title/index";
import { Button } from "../layout/Ui";
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./styles";

export default function Index(props: any) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => setOpen(props?.open), [props.open]);

  return open ? (
    <ModalBackground>
      <ModalContainer>
        <ModalHeader>
          <Title type="h2">{props.title}</Title>
          <Button
            className="default"
            style={{ borderRadius: "100%" }}
            onClick={() => props.handleOpen(false)}
          >
            <i
              className="fa-solid fa-circle-xmark"
              style={{ fontSize: "30px", color: "black" }}
            >
              {" "}
            </i>
          </Button>
        </ModalHeader>
        <ModalBody>{props?.children}</ModalBody>
      </ModalContainer>
    </ModalBackground>
  ) : (
    <> </>
  );
}
