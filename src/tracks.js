import imgSrc from "./assets/joy.png";
import imgSrc2 from "./assets/joy2.png";
import imgSrc3 from "./assets/joy3.png";
import imgSrc4 from "./assets/shu.png";

import summy from "./assets/summy.mp3";
import huahai from "./assets/周杰伦-花海.mp3";
import daoxiang from "./assets/周杰伦 - 稻香.mp3";
import yuanyouhui from "./assets/周杰伦 - 园游会.mp3";
import yeye from "./assets/爷爷泡的茶 - 周杰伦.mp3";
import you from "./assets/许嵩 - 有何不可.mp3";

const tracks = [
  {
    title: "爷爷泡的茶",
    artlist: "周杰伦",
    audioSrc: yeye,
    image: imgSrc,
    color: "#00aeb0",
  },
  {
    title: "有何不可",
    artlist: "许嵩",
    audioSrc: you,
    image: imgSrc4,
    color: "#ffb77a",
  },
  {
    title: "花海",
    artlist: "周杰伦",
    audioSrc: huahai,
    image: imgSrc3,
    color: "#5f9fff",
  },
  {
    title: "夏天",
    artlist: "李玖哲",
    audioSrc: summy,
    image: imgSrc2,
    color: "#e8c07b",
  },

  {
    title: "稻香",
    artlist: "周杰伦",
    audioSrc: daoxiang,
    image: imgSrc,
    color: "skyblue",
  },
  {
    title: "园游会",
    artlist: "周杰伦",
    audioSrc: yuanyouhui,
    image: imgSrc,
    color: "#57d962",
  },
];
export default tracks;
