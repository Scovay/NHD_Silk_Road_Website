import React from 'react';

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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit ame 
              t dui nisi. Donec finibus magna quis nisl eleifend porta. Donec porta, tellus nec dapibus ullamcorper, nisl nibh 
              commodo nisi, et dignissim augue augue nec metus. Integer non eros id tortor vulputate tincidunt. Sed aliquam vel mi 
              sit amet ultrices. Donec tellus neque, mattis a efficitur vitae, iaculis eu nunc. Vestibulum nec ornare mauris.</p>
            </div>
          </div>
          <div className = "person-card">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Marco_Polo_-_costume_tartare.jpg/440px-Marco_Polo_-_costume_tartare.jpg" alt = "Marco Polo"></img>
            <div className = "person-bio">
              <h4>Marco Polo</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit ame 
              t dui nisi. Donec finibus magna quis nisl eleifend porta. Donec porta, tellus nec dapibus ullamcorper, nisl nibh 
              commodo nisi, et dignissim augue augue nec metus. Integer non eros id tortor vulputate tincidunt. Sed aliquam vel mi 
              sit amet ultrices. Donec tellus neque, mattis a efficitur vitae, iaculis eu nunc. Vestibulum nec ornare mauris.</p>
            </div>
          </div>
        </div>
      </center>
      <div>
        <h2>Goverments/Countries involved with the silk road</h2>
        <ul>
          <li> - Every Chinese Dynasty and their involvement (especially the Han)</li>
          <li> - The Roman Empire</li>
          <li> - Persia</li>
          <li> - Arabia</li>
          <li> - India</li>
        </ul>
        <div className = "reason-section">
          <h2>Reason For Devlopment:</h2>
          <p>Was first used to trade for horses but as Emperor Wu of Han saw the quality and usefulness of the horse he wondered what other goods could be gained and then the silk road expanded into what we now know.</p>
        </div>
      </div>
      <img className = "map-img" src = "https://sites.google.com/a/dansvillecsd.org/migliore/_/rsrc/1468880830415/lessons-1/unit-2/the-han-dynasty/World%20History%20-%20Pearson%20eText%202.0%20%281%29.png" alt = "Silk Road Map"></img>
    </div>
  )
}

export default Items;