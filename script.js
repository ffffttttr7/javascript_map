// JavaScript
//console.log('Hello world!');//

var map = L.map('map').setView([33.672901002565446, 130.44425085028558],15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


//L.marker([33.67263001662146, 130.44291655057535]).addTo(map).bindPopup('九産大の美術館です！');

//L.marker([33.66932179916905, 130.4472460994946]).addTo(map)
  //.bindPopup('九産大のアリーナです！<br><img src="images/img01.png" alt="img">');

//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//  });

//  L.marker([33.66932179916905,130.4472460994946], { icon: whiteIcon }).addTo(map).bindPopup('大楠アリーナです！');

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });
    yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });
  
  L.marker([33.66932179916905,130.4472460994946], { icon: whiteIcon }).addTo(map).bindPopup('大楠アリーナです！');
  L.marker([33.671852166504415, 130.4432840008974], { icon: pinkIcon }).addTo(map).bindPopup('九産大美術館です！');
  L.marker([33.67033602199188, 130.44371621130477], { icon: blueIcon }).addTo(map).bindPopup('九産大図書館です！');
  L.marker([33.67115417720483, 130.4452391384963], { icon: yellowIcon }).addTo(map).bindPopup('クラブハウスです！');

  const circle = L.circle([33.66932179916905,130.4472460994946], {
    color: 'blue', //円の輪郭線の色
    fillColor: '#000080', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

// クリック位置の緯度経度表示
  const popup = L.popup();
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ここは" + e.latlng.toString() + "です")
      .openOn(map);
  }
  
  map.on('click', onMapClick);
  

// 多角形の表示
const polygon = L.polygon([
  [33.678354, 130.469427],
  [33.648279, 130.441618],
  [33.677497, 130.392094]
], {
  color: 'green',
  fillColor: '#00ff00',
  fillOpacity: 0.3
}).addTo(map);