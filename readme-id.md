# Anime API

![Anime Header](https://user-images.githubusercontent.com/20434351/115062020-10813e80-9f14-11eb-985a-f1acad9ee365.jpeg)

> Layanan API untuk anime

## 🌎 Bahasa

Baca deskripsi ini dalam bahasa lain:

- [🇬🇧 English](./readme.md)

## Deskripsi

API ini semula digunakan untuk latihan pada webinar Uncover Vue 3 Reactivity System. Teman-teman dapat melihat rekaman ulangnya di [Uncover Vue 3 Reactivity System](https://jefrydco.id/blog) - _pranalanya masih mengarah ke blog pribadi saya, akan saya perbarui jika rekaman ulangnya telah diunggah_.

## Sumber Data

Data anime diambil dari [Kaggle: Basis Data Rekomendasi Anime 2020](https://www.kaggle.com/hernan4444/anime-recommendation-database-2020) oleh [Hernan Valdivieso](https://github.com/hernan4444).

## Daftar Keren

Teman-teman dapat melihat daftar aplikasi keren yang menggunakan API ini pada [Awesome Anime Api](https://jefrydco.id/blog) - _pranalanya masih mengarah ke blog priadi saya, akan saya perbarui jika pranalanya telah dibuat_.

## Dokumentasi API

### _Request_

URL Dasar: `https://anime-api-one.vercel.app/api`

#### Anime

URL: `/anime`

Method: `GET`

Parameter Kueri:

- `q`, kata kunci pencarian. Cth: `q=Naruto`
- `sort`, mengurutkan data berdasarkan A-Z `asc` atau Z-A `desc` pada nama. Cth: `sort=desc`
- `sortBy`, mengurutkan data berdasarkan bagian tertentu, nilai didapatkan dari [SortBy API](#sortby). Cth: `sortBy=MAL_ID`
- `page`, halaman hasil sekarang, nilai bawaannya adalah `1`. Cth: `page=3`
- `size`, berapa banyak hasil pencarian yang dikembalikan, nilai bawaannya adalah `10`. Cth: `size=7`
- `duration`, disaring berdasarkan _duration_, nilai didapatkan dari [Duration API](#duration). Cth: `duration=1%20hr.`
- `genres`, disaring berdasarkan _genres_, nilai didapatkan dari [Genres API](#genres). Cth: `genres=Action`
- `licensors`, disaring berdasarkan _licensors_, nilai didapatkan dari [Licensors API](#licensors). Cth: `licensors=4Kids%20Entertainment`
- `producers`, disaring berdasarkan _producers_, nilai didapatkan dari [Producers API](#producers). Cth: `producers=12%20Diary%20Holders`
- `rating`, disaring berdasarkan _rating_, nilai didapatkan dari [Rating API](#rating). Cth: `rating=G%20-%20All%20Ages`
- `studios`, disaring berdasarkan _studios_, nilai didapatkan dari [Studios API](#studios). Cth: `studios=10Gauge`
- `type`, disaring berdasarkan _type_, nilai didapatkan dari [Type API](#type). Cth: `type=Movie`

Semua parameter kueri dapat digabungkan untuk menyaring hasil pencarian dengan banyak kondisi. Contohnya:

```
/anime?q=Naruto&sort=desc&sortBy=Score&studios=Studio%20Pierrot&genres=Comedy&licensors=VIZ%20Media&producers=KSS
```

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

Contoh Respon:

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

## Perizinan

Kode sumber berlisensi [MIT](./license.md)
