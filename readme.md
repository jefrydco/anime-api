# Anime API

![Anime Header](https://user-images.githubusercontent.com/20434351/115062020-10813e80-9f14-11eb-985a-f1acad9ee365.jpeg)

> API service for anime

## 🌎 Languages

Read this description in another languages:

- [🇮🇩 Indonesian](./readme-id.md)

## Description

This API was intended to be used as an exercise in Uncover Vue 3 Reactivity System webinar. You can watch the playback in [Uncover Vue 3 Reactivity System](https://jefrydco.id/blog) - _the link is still refer to my blog, will update later if the playback is uploaded_.

## Data Source

The anime data is taken from [Kaggle: Anime Recommendation Database 2020](https://www.kaggle.com/hernan4444/anime-recommendation-database-2020) by [Hernan Valdivieso](https://github.com/hernan4444).

## Awesome List

You can take a look on awesome app that use this API in [Awesome Anime Api](https://jefrydco.id/blog) - _the link is still refer to my blog, will update later if the link is already created_.

## API Documentation

### Request

Base Url: `https://anime-api-one.vercel.app/api`

#### Anime

URL: `/anime`

Method: `GET`

Query Params:

- `q`, search keyword. E.g.: `q=Naruto`
- `sort`, sort data as ascending `asc` or descending `desc` by the name. E.g.: `sort=desc`
- `sortBy`, sort data by certain field, value can be obtained from [SortBy API](#sortby). E.g.: `sortBy=MAL_ID`
- `page`, current result page, default value is `1`. E.g.: `page=3`
- `size`, how much item is returned, default value is `10`. E.g.: `size=7`
- `duration`, filtered by duration, value can be obtained from [Duration API](#duration). E.g.: `duration=1%20hr.`
- `genres`, filtered by genres, value can be obtained from [Genres API](#genres). E.g.: `genres=Action`
- `licensors`, filtered by licensors, value can be obtained from [Licensors API](#licensors). E.g.: `licensors=4Kids%20Entertainment`
- `producers`, filtered by producers, value can be obtained from [Producers API](#producers). E.g.: `producers=12%20Diary%20Holders`
- `rating`, filtered by rating, value can be obtained from [Rating API](#rating). E.g.: `rating=G%20-%20All%20Ages`
- `studios`, filtered by studios, value can be obtained from [Studios API](#studios). E.g.: `studios=10Gauge`
- `type`, filtered by type, value can be obtained from [Type API](#type). E.g.: `type=Movie`

All the query params can be combined to filter the result with multiple condition. For instance:

```
/anime?q=Naruto&sort=desc&sortBy=Score&studios=Studio%20Pierrot&genres=Comedy&licensors=VIZ%20Media&producers=KSS
```

Sample Response:

```json
{
  "data": [
    ...
  ],
  "total": 17562,
  "page": 1757,
  "size": 10,
  "first": "/api/anime?page=1",
  "last": "/api/anime?page=1757",
  "prev": "/api/anime?page=1756",
  "next": "/api/anime?page=1757"
}
```

#### SortBy

URL: `/sortby`

Method: `GET`

Sample Response:

```json
{
  "data": [
    "MAL_ID",
    "Name",
    ...
    "Score-2",
    "Score-1"
  ]
}
```

#### Duration

URL: `/duration`

Method: `GET`

Sample Response:

```json
{
  "data": [
    "1 hr.",
    "1 hr. 1 min.",
    ...
    "9 min. per ep.",
    "Unknown"
  ]
}
```

#### Genres

URL: `/genres`

Method: `GET`

Sample Response:

```json
{
  "data": [
    "Action",
    "Adventure",
    ...
    "Yaoi",
    "Yuri"
  ]
}
```

#### Licensors

URL: `/licensors`

Method: `GET`

Sample Response:

```json
{
  "data": [
    "4Kids Entertainment",
    "ADV Films",
    ...
    "feel.",
    "iQIYI"
  ]
}
```

#### Producers

URL: `/producers`

Method: `GET`

Sample Response:

```json
{
"data": [
    "12 Diary Holders",
    "1st PLACE",
    ...
    "teamKG",
    "voque ting"
  ]
}
```

#### Rating

URL: `/rating`

Method: `GET`

Sample Response:

```json
{
"data": [
    "G - All Ages",
    "PG - Children",
    "PG-13 - Teens 13 or older",
    "R - 17+ (violence & profanity)",
    "R+ - Mild Nudity",
    "Rx - Hentai",
    "Unknown"
  ]
}
```

#### Studios

URL: `/studios`

Method: `GET`

Sample Response:

```json
{
"data": [
    "10Gauge",
    "1IN",
    ...
    "teamKG",
    "ufotable"
  ]
}
```

#### Type

URL: `/type`

Method: `GET`

Sample Response:

```json
{
"data": [
    "Movie",
    "Music",
    "ONA",
    "OVA",
    "Special",
    "TV",
    "Unknown"
  ]
}
```

## License

Source code is available under [MIT License](./license.md)
