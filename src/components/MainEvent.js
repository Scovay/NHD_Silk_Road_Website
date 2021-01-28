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
      <div>
        <div className = "reason-section">
          <h2>Reason For Devlopment:</h2>
          <p>Was first used to trade for horses but as Emperor Wu of Han saw the quality and usefulness of the horse he wondered what other goods could be gained and then the silk road expanded into what we now know.</p>
        </div>
        <h2>Goverments/Countries involved with the silk road</h2>
        <ul>
          <li> - Every Chinese Dynasty and their involvement (especially the Han)</li>
          <li> - The Roman Empire</li>
          <li> - Persia</li>
          <li> - Arabia</li>
          <li> - India</li>
        </ul>
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
      <h2>Route The Silk Road Followed</h2>
      <img className = "map-img" src = "https://sites.google.com/a/dansvillecsd.org/migliore/_/rsrc/1468880830415/lessons-1/unit-2/the-han-dynasty/World%20History%20-%20Pearson%20eText%202.0%20%281%29.png" alt = "Silk Road Map"></img>
      <Link to = "/itemsTraded"><button>Find Out What Items Were Traded Along the Silk Road</button></Link>
    </div>
  )
}

export default Items;