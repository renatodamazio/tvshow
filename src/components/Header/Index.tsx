import React from "react";
import { Container } from "../layout/Structure";
import { Input, Button } from "../layout/Ui";
import { HeaderWrapper } from "./header.styles";

export default function Index() {
  return (
    <HeaderWrapper>
      <Container className="row">
        <Input placeholder="Search a tv show" defaultValue="Power puff girls" />
        &nbsp;
        <Button>
          <i className="fa-solid fa-magnifying-glass" />
        </Button>
      </Container>
    </HeaderWrapper>
  );
}
