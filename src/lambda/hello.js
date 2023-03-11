const https = require('https');

const WEEKDAYS = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const IMAGES = {

  // Day of week

  monday: [
    'https://i.imgur.com/GlXexz3.jpg',
    'https://i.imgur.com/IJ4Y0Ku.png',
    'https://i.imgur.com/jyncHsa.png',
    'https://i.imgur.com/9WTtCJd.jpg',
    // Got from "tuesday"
    'https://i.imgur.com/Tioa26u.png',
  ],
  tuesday: [
    'https://i.imgur.com/Hza7wmw.png',
    'https://i.imgur.com/5sffeZV.png',
    'https://i.imgur.com/Tioa26u.png',
    'https://i.imgur.com/tRTTFnN.jpg',
    'https://i.imgur.com/fdAhtRy.jpg',
    'https://i.imgur.com/fNaCgnq.jpg',
    'https://i.imgur.com/k2RW9ZN.jpg',
    'https://i.imgur.com/kRodDQE.jpg',
    // Got from "monday"
    'https://i.imgur.com/GlXexz3.jpg',
    'https://i.imgur.com/IJ4Y0Ku.png',
    'https://i.imgur.com/jyncHsa.png',
  ],
  wednesday: [
    'https://i.imgur.com/bwdxIEh.jpg',
    'https://i.imgur.com/T3DUpmG.png',
    'https://i.imgur.com/ZZyeTZj.jpg',
    'https://i.imgur.com/x8IKfDQ.jpg',
    'https://i.imgur.com/SGgYdO1.jpg',
    'https://i.imgur.com/xR815oG.jpg',
    'https://i.imgur.com/bfqnp7c.jpg',
    'https://i.imgur.com/VRC34VF.jpg',
    'https://i.imgur.com/u19hicR.jpg',
    'https://i.imgur.com/wwiRFCD.jpg',
    'https://i.imgur.com/f2TT4oA.jpg',
    'https://i.imgur.com/0GXWFoT.jpg',
    'https://i.imgur.com/2zlRpNH.jpg',
    'https://i.imgur.com/wqpnVxd.jpg',
    'https://i.imgur.com/CDzAR39.png',
    'https://i.imgur.com/lzLHUxa.jpg',
    'https://i.imgur.com/DHbXJHC.jpg',
    'https://i.imgur.com/caxb2SK.png',
    'https://i.imgur.com/5kE8OOg.png',
    'https://i.imgur.com/VL7b87T.jpg',
    'https://i.imgur.com/PSYOMKz.png',
    'https://i.imgur.com/M2NpO75.png',
    'https://i.imgur.com/ZlK2aK0.png',
    'https://i.imgur.com/QeIkQQx.jpg',
    'https://i.imgur.com/bD3Uj3y.png',
    'https://i.imgur.com/4pTKArH.png',
    'https://i.imgur.com/HTmeJ7K.jpg',
    'https://i.imgur.com/dECkIuJ.jpg',
    'https://i.imgur.com/gTh5pA3.jpg',
    'https://i.imgur.com/TY0XG9n.png',
    'https://i.imgur.com/oI9TJ0e.jpg',
    'https://i.imgur.com/h09m9JJ.png',
    'https://i.imgur.com/ZxhyppT.jpg',
    'https://i.imgur.com/kJRLMuk.png',
    'https://i.imgur.com/lrHDc3B.png',
    'https://i.imgur.com/tMiwB6k.jpg',
    'https://i.imgur.com/0etyoGJ.png',
    'https://i.imgur.com/5JxRRIn.png',
    'https://i.imgur.com/6vuEt0w.png',
    'https://i.imgur.com/MeM1e37.jpg',
    'https://i.imgur.com/bN1cdRq.jpg',
    'https://i.imgur.com/eD8Z8d0.jpg',
    'https://i.imgur.com/VbJGRKh.png',
    'https://i.imgur.com/GE6eTBD.jpg',
    'https://i.imgur.com/C0FYcx8.jpg',
    'https://i.imgur.com/1jwAFFK.png',
    'https://i.imgur.com/hxt4pLK.jpg',
    'https://i.imgur.com/uKYR1Yr.jpg',
    'https://i.imgur.com/oXEW3wB.jpg',
    'https://i.imgur.com/D7SmhVa.png',
    'https://i.imgur.com/u6TeocD.png',
    'https://i.imgur.com/qmQxn9A.png',
    'https://i.imgur.com/7SnEEPo.png',
    'https://i.imgur.com/HsVtnn9.png',
    'https://i.imgur.com/ULmrFsM.jpg',
    'https://i.imgur.com/jmqlkRc.jpg',
    'https://i.imgur.com/fLhFj25.jpg',
    'https://i.imgur.com/X51EzQ0.jpg',
    'https://i.imgur.com/jTKoBc6.jpg',
    'https://i.imgur.com/e4625tL.jpg',
    'https://i.imgur.com/ocRNoXe.jpg',
    'https://i.imgur.com/LDE2Xhm.jpg',
    'https://i.imgur.com/RoQCS7z.jpg',
    'https://i.imgur.com/lJykHzg.png',
    'https://i.imgur.com/hUYdWjt.png',
    'https://i.imgur.com/j9hKjce.png',
    'https://i.imgur.com/taLRoH3.jpg',
    'https://i.imgur.com/oVYaHWo.jpg',
    'https://i.imgur.com/5OfMZ0Q.png',
    'https://i.imgur.com/PtY1Jsz.png',
    'https://i.imgur.com/O63mb6U.png',
    'https://i.imgur.com/H78ce90.png',
    'https://i.imgur.com/lSCeq6Z.png',
    'https://i.imgur.com/530lgdv.jpg',
    'https://i.imgur.com/FoupGuq.jpg',
    'https://i.imgur.com/maJb06u.png',
    'https://i.imgur.com/idtoVA9.png',
    'https://i.imgur.com/HRLt94d.jpg',
    'https://i.imgur.com/ZqWseO7.png',
    'https://i.imgur.com/EhbRIhw.png',
    'https://i.imgur.com/yYs2r93.png',
    'https://i.imgur.com/YED3zp6.png',
    'https://i.imgur.com/TuzVbsY.png',
    'https://i.imgur.com/DEeR0vu.jpg',
    'https://i.imgur.com/MxiSGB8.png',
    'https://i.imgur.com/ZFwuUMM.jpg',
    'https://i.imgur.com/fTNthmA.png',
    'https://i.imgur.com/EGipqja.png',
    'https://i.imgur.com/0YfhQSb.png',
    'https://i.imgur.com/DkmZi95.jpg',
    'https://i.imgur.com/oWxtBGA.jpg',
    'https://i.imgur.com/7CYqfrL.jpg',
    'https://i.imgur.com/gHHHT2T.jpg',
    'https://i.imgur.com/BlbtyMA.jpg',
    'https://i.imgur.com/W4WTe9O.jpg',
    'https://i.imgur.com/uC71wJ8.jpg',
    'https://i.imgur.com/FHeytBl.jpg',
    'https://i.imgur.com/KiZt03Y.jpg',
    'https://i.imgur.com/mgJoS4Z.png',
    'https://i.imgur.com/B6YeZwP.png',
    'https://i.imgur.com/Cwt1VjN.jpg',
    'https://i.imgur.com/OsjolA0.jpg',
    'https://i.imgur.com/Dyft9vx.jpg',
    'https://i.imgur.com/HhGDG1f.jpg',
    'https://i.imgur.com/BL4Im8y.jpg',
    'https://i.imgur.com/d9hwRIj.png',
    'https://i.imgur.com/BVs0VM7.jpg',
    'https://i.imgur.com/3iYzLhw.png',
    'https://i.imgur.com/IB5iHXQ.jpg',
    'https://i.imgur.com/qu1oqrO.jpg',
    'https://i.imgur.com/VmT5D3O.jpg',
    'https://i.imgur.com/yuaI1hH.jpg',
    'https://i.imgur.com/J9UYigA.jpg',
    'https://i.imgur.com/GnJK6Xs.png',
    'https://i.imgur.com/ZBArsY0.png',
    'https://i.imgur.com/19B3dmO.jpg',
    'https://i.imgur.com/68E4DfJ.png',
    'https://i.imgur.com/41JMr08.jpg',
    'https://i.imgur.com/tCHpusu.jpg',
    'https://i.imgur.com/3yyuN7P.png',
    'https://i.imgur.com/WtddfnQ.jpg',
    'https://i.imgur.com/CyIsfNA.jpg',
    'https://i.imgur.com/LWctbN6.jpg',
    'https://i.imgur.com/AG5cSky.jpg',
    'https://i.imgur.com/1AFoB7t.png',
    'https://i.imgur.com/YzCekZM.jpg',
    'https://i.imgur.com/ZRNtvdR.png',
    'https://i.imgur.com/T5pGBNP.png',
    'https://i.imgur.com/AhSa3vE.png',
    'https://i.imgur.com/nIvXwdX.png',
    'https://i.imgur.com/iDKkjdD.png',
    'https://i.imgur.com/eu53jgO.jpg',
    'https://i.imgur.com/E5jTkuK.png',
    'https://i.imgur.com/B4BrvoN.jpg',
  ],
  thursday: [
    'https://i.imgur.com/pFnqk0S.jpg',
    'https://i.imgur.com/WM73Dog.jpg',
    'https://i.imgur.com/TSHZCr7.jpg',
    'https://i.imgur.com/c1dHJP8.png',
    'https://i.imgur.com/Sty5GMZ.jpg',
    'https://i.imgur.com/QoAtJjA.png',
    'https://i.imgur.com/Flupiea.png',
    'https://i.imgur.com/ym1CNuN.png',
    'https://i.imgur.com/SEGgQBl.jpg',
    'https://i.imgur.com/Mffp0Ho.jpg',
  ],
  friday: [
    'https://i.imgur.com/OnfVaHt.png',
    'https://i.imgur.com/v8redB6.jpg',
  ],
  saturday: [
    'https://i.imgur.com/DCD0OB3.jpg',
    'https://i.imgur.com/t9Q98AJ.jpg',
  ],
  sunday: [
    'https://i.imgur.com/IFIS02O.jpg',
    'https://i.imgur.com/3iJaILL.jpg',
  ],

  notWednesday: [
    'https://i.imgur.com/Gjy73VS.png',
    'https://i.imgur.com/niDB8uh.png',
    'https://i.imgur.com/5W1JWL5.jpg',
    'https://i.imgur.com/l1NZRjK.jpg',
    'https://i.imgur.com/CmOGdEo.jpg',
    'https://i.imgur.com/GjIPeGu.png',
    'https://i.imgur.com/9RL5UdD.jpg',
    'https://i.imgur.com/Q043FrN.png',
    'https://i.imgur.com/5hMSxot.png',
    'https://i.imgur.com/iz5woiD.png',
    'https://i.imgur.com/ejTdmVN.png',
    'https://i.imgur.com/ceYyuIi.png',
    'https://i.imgur.com/LOIQGqs.png',
    'https://i.imgur.com/f0JCZkP.jpg',
    'https://i.imgur.com/jdyS5LY.jpg',
    'https://i.imgur.com/6kR9W9o.jpg',
    'https://i.imgur.com/rLtHyGx.jpg',
  ],

  any: [
    'https://i.imgur.com/dcR8HrD.jpg',
    'https://i.imgur.com/krav1NI.jpg',
    'https://i.imgur.com/8ycxJka.png',
    'https://i.imgur.com/vgy26bm.jpg',
    'https://i.imgur.com/MpJpaNI.jpg',
  ],
};

const METHOD_POST = 'POST';

async function handler(event, context) {

  if (event.httpMethod !== METHOD_POST) {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  
  let data;

  try {
    data = JSON.parse(event.body);
    console.log('[DATA]', data);
  } catch (err) {
    console.error('Failed to parse body as JSON', body);
  }

  if (!data) {
    console.error('Bad request', httpMethod);
    return {
      statusCode: 400,
      body: 'Bad request',
    };
    return;
  }

  // const chatId = data.message.chat.id;
  const token = process.env.TELEGRAM_BOT_TOKEN;

  // const photoUrl = getRandomImageUrl(data.message.date);


  let url = `https://api.telegram.org/bot${token}/sendGame`;
  // url += `?chat_id=${chatId}&photo=${encodeURIComponent(photoUrl)}`;
  url += `?chat_id=${data.callback_query.from.id}&game_short_name=${data.callback_query.game_short_name}&reply_markup={"url": "https:ya.ru/"}`;

//   try {
//     const response = await fetch(url);

//     return {
//       statusCode: 200,
//       body: 'Success',
//     };
//   } catch (err) {
//     console.error(err);

//     return {
//       statusCode: 422,
//       body: 'Something went wrong',
//     };

//   }
}

https.get(url, (...rest) => {
  console.log('rest', ...rest)
})

// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     const req = https.get(url, (res) => {
//       let data = '';

//       res.on('data', (chunk) => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         console.log(res.statusCode);
//         console.log(data);
//         resolve();
//       });
//     });

//     req.on('error', (err) => {
//       console.error(err);
//       reject(err);
//     });

//     req.end();
//   });
// }


function getRandomImageUrl(timestamp) {
  const date = new Date(timestamp * 1000);
  const weekday = date.getDay();

  const images = [];

  if (weekday === WEEKDAYS.monday) {

    images.push(...IMAGES.monday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  } else if (weekday === WEEKDAYS.tuesday) {

    images.push(...IMAGES.tuesday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  } else if (weekday === WEEKDAYS.wednesday) {

    images.push(...IMAGES.wednesday);
    images.push(...IMAGES.any);

  } else if (weekday === WEEKDAYS.thursday) {

    images.push(...IMAGES.thursday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  } else if (weekday === WEEKDAYS.friday) {

    images.push(...IMAGES.friday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  } else if (weekday === WEEKDAYS.saturday) {

    images.push(...IMAGES.saturday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  } else if (weekday === WEEKDAYS.sunday) {

    images.push(...IMAGES.sunday);
    images.push(...IMAGES.any);
    images.push(...IMAGES.notWednesday);

  }

  const randomIndex = Math.floor(Math.random() * images.length);

  const randomImage = images[randomIndex];

  return randomImage;
}

exports.handler = handler;
