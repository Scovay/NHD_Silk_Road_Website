import React from 'react';

const Items = () => (
  <div className="main-content">
    <h2>Items</h2>
    <ul className = "ul-with-pad">
        <li>China</li>
            <ul className = "ul-with-pad">
                <li>- Silk</li>
                <li>- Rice</li>
                <li>- Tea</li>
                <li>- China</li>
                <li>- Bronze Ornaments</li>
                <li>- Medicine</li>
                <li>- Paper</li>
                <li>- Varnish</li>
                <li>- Purfumes</li>
                <li>- Bronze mirrors</li>
                <li>- Umbrellas</li>
            </ul>
        <li>Europe/West</li>
            <ul className = "ul-with-pad">
                <li>- Horses</li>
                <li>- Misc. Veggies And Fruits</li>
                    <ul>
                        <li>- String Beans</li>
                        <li>- Onions</li>
                        <li>- Cucumbers</li>
                        <li>- Carrots</li>
                        <li>- Pomegranates</li>
                        <li>- Grapes</li>
                        <li>- Figs</li>
                    </ul>
            </ul>
        <li>East Mediterranean</li>
            <ul className = "ul-with-pad">
                <li>- Woolen Goods</li>
                <li>- Carpets</li>
                <li>- Curtains</li>
                <li>- Blankets</li>
                <li>- Rugs</li>
            </ul>
        <li>Central Asia</li>
            <ul className = "ul-with-pad">
                <li>- Camels</li>
                <li>- Silver</li>
                <li>- Gold</li>
                <li>- Semi-Precious stones</li>
                <li>- Glass</li>
                <li>- Skins & Wool</li>
                <li>- Exotic Fruits</li>
                <ul>
                    <li>- Watermelon</li>
                    <li>- Peaches</li>
                    <li>- Melons</li>
                    <li>- Lions</li>
                    <li>- Leapords</li>
                    <li>- Dogs</li>
                </ul>
            </ul>
        <li>India</li>
            <ul className = "ul-with-pad">
                <li>- Fabrics</li>
                <li>- Spices</li>
                <li>- Dyes</li>
                <li>- Semi-Precious Stones</li>
                <li>- Ivory</li>
            </ul>
    </ul>
  </div>
);

export default Items;