# Tura

## Usage

```javascript
distanceMatrix(['Ljubljana', 'Celje', 'Velenje', Dravogra], (data) => {
  console.log(data);
});
```

Output...

```javascript
[ { address: '6000 Koper, Slovenia',
    distance: { text: '106 km', value: 105927 },
    duration: { text: '1 hour 9 mins', value: 4169 } },
  { address: '6310 Izola, Slovenia',
    distance: { text: '110 km', value: 110301 },
    duration: { text: '1 hour 11 mins', value: 4285 } },
  { address: 'Celje, Slovenia',
    distance: { text: '78.3 km', value: 78263 },
    duration: { text: '54 mins', value: 3240 } },
  { address: '3320 Velenje, Slovenia',
    distance: { text: '76.2 km', value: 76192 },
    duration: { text: '1 hour 1 min', value: 3668 } },
  { address: '3325 Šoštanj, Slovenia',
    distance: { text: '81.0 km', value: 80990 },
    duration: { text: '1 hour 2 mins', value: 3728 } },
  { address: '2393 Črna na Koroškem, Slovenia',
    distance: { text: '104 km', value: 104075 },
    duration: { text: '1 hour 41 mins', value: 6041 } },
  { address: '2370 Dravograd, Slovenia',
    distance: { text: '112 km', value: 111812 },
    duration: { text: '1 hour 36 mins', value: 5770 } },
  { address: '2000 Maribor, Slovenia',
    distance: { text: '127 km', value: 127403 },
    duration: { text: '1 hour 24 mins', value: 5054 } },
  { address: '2250 Ptuj, Slovenia',
    distance: { text: '130 km', value: 129877 },
    duration: { text: '1 hour 28 mins', value: 5307 } },
  { address: '9000 Murska Sobota, Slovenia',
    distance: { text: '178 km', value: 178454 },
    duration: { text: '1 hour 48 mins', value: 6460 } },
  { address: 'Municipality of Šentilj, Slovenia',
    distance: { text: '150 km', value: 149668 },
    duration: { text: '1 hour 35 mins', value: 5693 } } ]
```

## Running with Docker

```bash
docker build -t otobrglez/tura .

docker run -ti otobrglez/tura Ljubljana Koper Izola \
    Celje Velenje Šoštanj \
    "Črna na Koroškem" Dravograd Maribor \
    Ptuj "Murska Sobota" Šentilj
```


- [Oto Brglez](https://github.com/otobrglez)
