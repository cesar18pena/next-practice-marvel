import * as React from "react";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CharacterCard = (props) => {
  const { character } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {character.name}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {character.description}
          </Typography>
          <Link>
            <NextLink
              href={`/characters/${character.id}`}
            >{`Learn more of ${character.name}`}
            </NextLink>
          </Link>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: "none", sm: "block" } }}
          image={`${character.profile?.path}.${character.profile?.extension}`}
          alt={character.name}
        />
      </Card>
    </Grid>
  );
};

export default CharacterCard;
