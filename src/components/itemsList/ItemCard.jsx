import React from 'react';
import orangeLogo from "../../Assets/orange.png";

export const ItemCard = () => { 
    return(
        <div className="columns">
        <div className="card column is-one-quarter">
        <div className="card-image">
          <figure className="image is-4by3">
          <img src={orangeLogo} alt="Logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
              <img src={orangeLogo} alt="Logo" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
      
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
          </div>
        </div>
      </div>
      </div>
    )
}