/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../layout/Structure";
import { Input, Button } from "../layout/Ui";
import { HeaderWrapper } from "./header.styles";
import Search from "../../api/search";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Index() {
  const [defaultValue, setDefaultValue] = useState<any>();
  const [searchValue, setSearchValue] = useState<any>();

  const query = useQuery();
  const queryValue = query.get("search");

  useEffect(() => {
    setDefaultValue(queryValue);
    setSearchValue(queryValue);
  }, []);

  const getShow = async () => {
    const response = await Search(searchValue);
  };

  return (
    <HeaderWrapper>
      <Container className="row">
        <Input
          placeholder="Search a tv show"
          onInput={(e) => setSearchValue((e.target as HTMLInputElement).value)}
          defaultValue={defaultValue}
        />
        &nbsp;
        <Button onClick={() => getShow()}>
          <i className="fa-solid fa-magnifying-glass" />
        </Button>
      </Container>
    </HeaderWrapper>
  );
}
