/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getEpisodeInfo from "./api/getEpisodeInfo";
import Card from "./components/cards/Card";
import Loading from "./components/Loading/Index";

// import getEpisodes from "./api/getEpisodes";
function Episode() {
  interface Info {
    map: any;
    id: number;
    name: string;
    season: number;
    airdate: string;
    image: object;
    number: number;
  }

  const [infos, setInfos] = useState<Info>();
  const param = useParams();
  const [showLoading, setShowLoading] = useState(true);
  const { id, date } = param;

  const getEpisodeInformation = async (id: any) => {
    const resp = await getEpisodeInfo(id, date);
    setInfos(resp);
    setShowLoading(false);
  };

  useEffect(() => {
    getEpisodeInformation(id);
  }, []);

  return (
    <div>
      {!showLoading ? (
        infos
        && infos.map((info: any) => (
          <Card key={info.id} info={info} size="medium" sumary />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Episode;
