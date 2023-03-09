import Header from "./Header";
import HeroImage from "./HeroImage";
import SongCards from "./SongCards";
import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../data.json";

export default function LandingPage() {
  const [songs, updateSongs] = useState();
  const [showAll,updateShowAll] = useState({
    "Albums" : false,
    "Songs" : false,
    "Top Songs": false
  })

  const fetchSongs = async () => {
    updateSongs(data);

    // let response = {};
    // const options = {
    //     method: 'GET',
    //     url: 'https://spotify23.p.rapidapi.com/search/',
    //     params: {
    //       q: '<REQUIRED>',
    //       type: 'multi',
    //       offset: '0',
    //       limit: '10',
    //       numberOfTopResults: '5'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '6ba9663f7amsh58c5b53e4d51f80p1a0028jsn2e54a9ecc683',
    //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    //     }
    //   };
    //   try {
    //     response = await axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     })
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <>
      <Header />
      <HeroImage />
      <SongCards category="Top Songs" songs={data.topResults.items} showAll={showAll} updateShowAll={updateShowAll} />
      <SongCards category="Albums" songs={data.albums.items} showAll={showAll} updateShowAll={updateShowAll} />
      <SongCards category="Songs" songs={data.tracks.items} showAll={showAll} updateShowAll={updateShowAll} />
    </>
  );
}
