/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import Title from "../title/index";
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
          <Title type="h1">{props.title}</Title>
          <a
            href="#!"
            onClick={() => props.handleOpen(false)}
            className="modal-close"
          >
            <i className="fa-solid fa-circle-xmark"> </i>
          </a>
        </ModalHeader>
        <ModalBody>{props?.children}</ModalBody>
        <ModalFooter> </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  ) : (
    <> </>
  );
}
