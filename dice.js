window.onload = function() {
    // 设置初始的默认图片
    const defaultSign = 'uploads/randomsign1.png';
    const defaultPlanet = 'uploads/randomplanet1.png';
    const defaultHouse = 'uploads/randomhouse1.png';
    
    signElement.style.backgroundImage = `url(${defaultSign})`;
    planetElement.style.backgroundImage = `url(${defaultPlanet})`;
    houseElement.style.backgroundImage = `url(${defaultHouse})`;
  };

// 定义每个骰子的不同面的图片路径数组
const signImages = [
    'uploads/randomsign1.png',
    'uploads/randomsign2.png',
    'uploads/randomsign3.png',
    'uploads/randomsign4.png',
    'uploads/randomsign5.png',
    'uploads/randomsign6.png',
    'uploads/randomsign7.png',
    'uploads/randomsign8.png',
    'uploads/randomsign9.png',
    'uploads/randomsign10.png',
    'uploads/randomsign11.png',
    'uploads/randomsign12.png', 
];
  
  const planetImages = [
    'uploads/randomplanet1.png',
    'uploads/randomplanet2.png',
    'uploads/randomplanet3.png',
    'uploads/randomplanet4.png',
    'uploads/randomplanet5.png',
    'uploads/randomplanet6.png',
    'uploads/randomplanet7.png',
    'uploads/randomplanet8.png',
    'uploads/randomplanet9.png',
    'uploads/randomplanet10.png',
    'uploads/randomplanet11.png',
    'uploads/randomplanet12.png',
  ];
  
  const houseImages = [
    'uploads/randomhouse1.png',
    'uploads/randomhouse2.png',
    'uploads/randomhouse3.png',
    'uploads/randomhouse4.png',
    'uploads/randomhouse5.png',
    'uploads/randomhouse6.png',
    'uploads/randomhouse7.png',
    'uploads/randomhouse8.png',
    'uploads/randomhouse9.png',
    'uploads/randomhouse10.png',
    'uploads/randomhouse11.png',
    'uploads/randomhouse12.png',
  ];
  
  // 获取每个骰子的元素
  const signElement = document.querySelector('.dice-bd .elements .sign');
  const planetElement = document.querySelector('.dice-bd .elements .planet');
  const houseElement = document.querySelector('.dice-bd .elements .house');
  
  // 获取“LANZAR”按钮的元素
  const rollButton = document.getElementById('rollButton');
  
  // 定义随机切换骰子面的函数
  function rollDice() { 
    // 随机选择一个图片路径
    const randomSign = signImages[Math.floor(Math.random() * signImages.length)];
    const randomPlanet = planetImages[Math.floor(Math.random() * planetImages.length)];
    const randomHouse = houseImages[Math.floor(Math.random() * houseImages.length)];
  
    // 设置骰子的背景图片为随机选择的图片
    signElement.style.backgroundImage = `url(${randomSign})`;
    planetElement.style.backgroundImage = `url(${randomPlanet})`;
    houseElement.style.backgroundImage = `url(${randomHouse})`;
  }
  
  // 绑定“LANZAR”按钮的点击事件，点击按钮时触发随机切换骰子面的函数
  rollButton.addEventListener('click', rollDice);