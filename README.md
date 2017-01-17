# Tura

## Usage

```javascript
distanceMatrix(['Ljubljana', 'Celje', 'Velenje', 'Dravograd'], (data) => {
  console.log(data);
});
```

Output is something like this,...

```javascript
[ { address: 'Celje, Slovenia',
    distance: { text: '78.3 km', value: 78263 },
    duration: { text: '54 mins', value: 3240 } },
  { address: '3320 Velenje, Slovenia',
    distance: { text: '76.2 km', value: 76192 },
    duration: { text: '1 hour 1 min', value: 3668 } },
  { address: '2370 Dravograd, Slovenia',
    distance: { text: '112 km', value: 111812 },
    duration: { text: '1 hour 36 mins', value: 5770 } } ]
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
