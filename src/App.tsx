/* eslint-disable comma-dangle */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import Card from "./components/cards/Card";
import Modal from "./components/modal/Index";
import Episodes from "./components/episodes/index";
import getEpisodes from "./api/getEpisodes";
import { Button } from "./components/layout/Ui";

function App() {
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

  const [users, setUser] = useState<[User]>();
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
    const load = await fetch(
      `${process.env.REACT_APP_API}/search/shows?q=powerpuff+girls`
    );
    const response = await load.json();

    setUser(response);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Modal title="Episodes" open={openModal} handleOpen={setOpenModal}>
        {!loading ? <Episodes id={showid} list={espisodesList} /> : "loading"}
      </Modal>

      {users?.map((item) => (
        <li key={item.show.id}>
          <Card info={item.show}>
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
    </div>
  );
}

export default App;
