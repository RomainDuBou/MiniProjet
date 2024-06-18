import React from "react";
import "./feed-card.css";
import { Button } from "antd";

const ResponseCard = ({ response }) => {
    return (
        <article className="feed">
            <div className="card-top">
                <div className="author">
                    <img src={response?.author?.image} alt="author profile" />
                    <div className="author-info">
                        <span>{response?.author?.name}</span>
                        <p>@{response?.author?.pseudo}</p>
                    </div>
                </div>
            </div>
            <p>{response?.description}</p>
        </article>
    );
};

export default ResponseCard;
