import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function SongCards({ category, songs, showAll, updateShowAll }) {
  const Cards = ({ song }) => {
    let imageurl = "";
    if (category === "Songs")
      imageurl = song.data.albumOfTrack.coverArt.sources[0].url;
    if (category === "Albums") imageurl = song.data.coverArt.sources[0].url;
    if (category === "Top Songs") {
      if (song.data.albumOfTrack)
        imageurl = song.data.albumOfTrack.coverArt.sources[0].url;
      else if (song.data.images)
        imageurl = song.data.images.items[0].sources[0].url;
      else if (song.data.visuals)
        imageurl = song.data.visuals.avatarImage.sources[0].url;
      else imageurl = song.data.coverArt.sources[0].url;
    }

    return (
      <Card
        sx={{
          width: "12rem",
          height: "17rem",
          margin: "0 0.7rem",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#121212",
        }}
      >
        <Box sx={{ border: "0.02rem solid", borderRadius: "18rem" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={imageurl}
            title={song.data.name}
          />
          <Typography
            sx={{
              height: "2rem",
              width: "100%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
            }}
            variant="body"
            component="div"
          >
            <Box
              sx={{
                margin: "0.4rem 0.rem",
                padding: "0.2rem 0rem",
                backgroundColor: "#121212",
                width: "70%",
                color: "#FFFFFF",
                borderRadius: "0.75rem",
                fontSize: "0.85rem",
              }}
            >
              100M Follows
            </Box>
          </Typography>
        </Box>
        <Typography
          sx={{ height: "2rem", color: "#FFFFFF" }}
          variant="body"
          component="div"
        >
          {song.data.name}
        </Typography>
      </Card>
    );
  };

  const handleShowMore = (e) => {
    if (showAll[e.target.value])
      updateShowAll({ ...showAll, [e.target.value]: false });
    else updateShowAll({ ...showAll, [e.target.value]: true });
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "2rem 0 1rem 0",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            {category}
          </Typography>
          <Button value={category} onClick={handleShowMore} variant="contained">
            {showAll[category] ? "Show Less" : "Show All"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {songs.map((song, index) => {
            if (index > 6 && !showAll[category]) {
                return <></>;
            }
            else return <Cards song={song} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
