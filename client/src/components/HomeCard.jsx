import "./HomeCard.css";
import React from 'react';

function HomeCard(props) {


    return (
        <article key="" className="card">

            <div className="card-header">
                <img src={props.img} alt="" />
            </div>

            <div className="card-info">
                <ul>

                    <li>
                        <span>
                            Name:
                        </span>
                        {props.name}
                    </li>

                    <li>
                        <span>
                            City:
                        </span>
                        {props.city}
                    </li>

                </ul>
            </div>

        </article>
    )
}

export default HomeCard;