/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import { useSelector, RootStateOrAny } from "react-redux";
import Card from "./components/cards/Card";
import Modal from "./components/modal/Index";
import Episodes from "./components/episodes/index";
import getEpisodes from "./api/getEpisodes";
import { Button } from "./components/layout/Ui";
import Search from "./api/search";
import ResultNotFound from "./ResultNotFound";
import Loading from "./components/Loading/Index";

interface User {
  show: {
    id: number;
    name: string;
  };
}

interface EpisodeList {
  id: number;
  name: string;
  image: object;
}

function App() {
  const updateSearchValue = useSelector(
    (state: RootStateOrAny) => state.searchReducer.newValue
  );
  const [users, setUser] = useState<[User]>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [showid, setShowId] = useState(0);
  const [espisodesList, setEpisodeLists] = useState<[EpisodeList]>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  async function loadEpisodes(id: number) {
    setShowId(id);
    setOpenModal(true);
    setLoading(true);

    const resp = await getEpisodes(id);
    setEpisodeLists(resp);
    setLoading(false);
  }

  async function loadData() {
    const { search } = window.location;
    const q = !search ? "powerpuff+girls" : search.split("=")[1];
    const response = await Search(q);

    if (!response.length) {
      setNotFound(true);
    } else {
      setUser(response);
      setNotFound(false);
    }

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  useEffect(() => {
    if (updateSearchValue) {
      setUser(updateSearchValue);
      setNotFound(false);
    }
    setLoading(false);
  }, [updateSearchValue]);

  return (
    <div>
      <Modal title="Episodes" open={openModal} handleOpen={setOpenModal}>
        {!loading ? <Episodes id={showid} list={espisodesList} /> : <Loading />}
      </Modal>

      {!notFound
        && users?.map((item) => (
          <li key={item.show.id}>
            <Card info={item.show} summary={false}>
              <Button
                onClick={() => {
                  loadEpisodes(item.show.id);
                }}
              >
                View Episodes
              </Button>
            </Card>
          </li>
        ))}

      { loading ? <Loading /> : ""}
      {(notFound) && <ResultNotFound />}
    </div>
  );
}

export default App;
