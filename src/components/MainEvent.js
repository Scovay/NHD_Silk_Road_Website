import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
  return (
    <div className = "main-content">
      <h2>People</h2>
      <center>
        <div className = "float-container">
          <div className = "person-card">
            <img src = "https://cdn-images-1.listennotes.com/episode/image/d2f508dda8bf402489d0c322f1d4ffcf.jpg" alt = "Zhang Qian"></img>
            <div className = "person-bio">
              <h4>Zhang Qian</h4>
              <p>Zhang Qian born in modern day Shaanxi Province and died around 114 BC, was a Chinese official and diplomat who served as an imperial envoy to the countries outside of China at about 200 BC during the Han dynasty. He was one of the first official diplomats to bring back valuable information about Central Asia, including the Greco-Bactrian remains of the Macedonian Empire as well as the Parthian Empire, to the Han dynasty’s Emperor Wu of Han.</p>
            </div>
          </div>
          <div className = "person-card">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Marco_Polo_-_costume_tartare.jpg/440px-Marco_Polo_-_costume_tartare.jpg" alt = "Marco Polo"></img>
            <div className = "person-bio">
              <h4>Marco Polo</h4>
              <p>Marco Polo, who was born on September 15, 1254, in Venice Italy and died on January 8, 1324, Venetian merchant, explorer, and writer who traveled from Europe to Asia on the silk road from 1271–1295, remaining in China for 17 of those years, wrote the Travels of Marco Polo, helping western culture understand eastern culture, structure and the great wealth and power it had to offer allowing western culture the first deep dive into eastern culture.</p>
            </div>
          </div>
        </div>
      </center>
      <hr></hr>
      <div>
        <div className = "reason-section">
          <h2>Reason For Devlopment:</h2>
          <p>Was first used to trade for horses but as Emperor Wu of Han saw the quality and usefulness of the horse he wondered what other goods could be gained and then the silk road expanded into what we now know.</p>
        </div>
        <hr></hr>
        <h2>Goverments/Countries involved with the silk road</h2>
        <ul>
          <li> - Every Chinese Dynasty and their involvement (especially the Han)</li>
          <li> - The Roman Empire</li>
          <li> - Persia</li>
          <li> - Arabia</li>
          <li> - India</li>
        </ul>
        <hr></hr>
        <h2>Professions of the Silk Road</h2>
        <ul>
          <li> - Merchant</li>
          <li> - Guard</li>  
          <li> - Bandits</li>
          <li> - Translators</li>
          <li> - Guides</li>
          <li> - Sailors</li>
        </ul>
      </div>
      <hr></hr>
      <h2>Route The Silk Road Followed</h2>
      <img className = "map-img" src = "https://sites.google.com/a/dansvillecsd.org/migliore/_/rsrc/1468880830415/lessons-1/unit-2/the-han-dynasty/World%20History%20-%20Pearson%20eText%202.0%20%281%29.png" alt = "Silk Road Map"></img>
      <hr></hr>
      <h2>Diseases Of The Silk Road</h2>
      <p className = "text-blurb">The Silk Road also spread lots of diseases along the route and infected lots of people, Smallpox and Measles moved from the west to the east. 
      There were also numerous parasites that moved from the east to the west mainly from China including, Liver Fluke, Roundworm, Whipworm, and Tapeworm. 
      To combat the spread of parasites due to bad hygiene people developed the “Hygiene Stick” an early version of toilet paper. It was a stick generally bamboo or 
      wood with a piece of cloth wrapped around the end to act as toilet paper.</p>
      <p className = "text-blurb">Another disease that most people know that spread along the Silk Road is the Bubonic Plague which caused the Black Death in 1347. 
      With the Silk road not only being one road it also spread the Plague in other places like Africa, India, and Mongol. This is generally blamed on Yersinia pestis, 
      a disease that manifests itself in fleas that infect rats. During that time period due to climate fluctuations the rat population in Mogol deminised severely which caused lots of 
      fleas to search for new hosts. The fleas then transferred onto camels and humans in caravans that traveled the Silk Road. The Silk Road due to it’s growing popularity was able to 
      effectively spread the disease through land and sea routes and transfer it to europe.</p>
      <hr></hr>
      <h2>Religion On The Silk Road</h2>
      <p className = "text-blurb">Religious beliefs of the peoples of the Silk Road changed radically over time and was largely due to the effects of travel and trade on the Silk Road itself. For over two thousand years the Silk Road was a network of roads for the travel and dissemination of religious beliefs across Eurasia.</p>
      <hr></hr>
      <h2>Caravanserais</h2>
      <p className = "text-blurb">
      Caravanserais were ideally positioned within a day’s journey of each other, so as to prevent merchants (and more particularly, their precious cargos) from spending nights exposed to the dangers of the road. On average, this resulted in a caravanserai every 30 to 40 kilometres in well-maintained areas, such as along the Great Trunk Road that ran through northern India and into Pakistan. Additionally, some had fortified walls and doubled as military strongholds or outposts, known as rabats, particularly those positioned near frontiers or borders. They also played a role in communicating both regional and international news across Central Asia, and for instance, under the Mughal emperors of the 16th century, the caravanserais of the Great Trunk Road in northern India were supplied with messenger horses, ready to pass on any important news carried by travellers.
      </p>
      <hr></hr>
      <Link to = "/itemsTraded"><button>Find Out What Items Were Traded Along the Silk Road</button></Link>
    </div>
  )
}

export default Items;