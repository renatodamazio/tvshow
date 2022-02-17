/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import {
  useLocation,
  Link,
  NavigationType,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "../layout/Structure";
import { Input, Button } from "../layout/Ui";
import { HeaderWrapper, Logo } from "./header.styles";
import Search from "../../api/search";
import { UPDATE_SEARCH } from "../../store/actions/actionType";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Index() {
  const [defaultValue, setDefaultValue] = useState<any>();
  const [searchValue, setSearchValue] = useState<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const query = useQuery();
  const queryValue = query.get("search");

  useEffect(() => {
    setDefaultValue(queryValue || "The Powerpuff Girls");
    setSearchValue(queryValue);
  }, []);

  const getShow = async () => {
    const paramSearch = `search=${searchValue
      .toLowerCase()
      .replace(/ {1}/gi, "+")}`;

    navigate(`/?${paramSearch}`);

    const response = await Search(searchValue);
    dispatch({ type: UPDATE_SEARCH, newValue: response });
  };

  return (
    <HeaderWrapper>
      <Container className="row">
        <Link to="/">
          <Logo src="/images/logo.png" alt="Logo" />
        </Link>
        <div className="search-container">
          <Input
            placeholder="Search a tv show"
            onInput={(e) =>
              setSearchValue((e.target as HTMLInputElement).value)
            }
            defaultValue={defaultValue}
          />
        </div>
        &nbsp;
        <div>
          <Button onClick={() => getShow()}>
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </div>
      </Container>
    </HeaderWrapper>
  );
}
