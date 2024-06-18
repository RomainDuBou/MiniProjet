import React from 'react'

function InformationCard() {
    return (
        <section className="feed">
            <p>Nom : </p>
            <div className="card-top">
                <div className="author">
                    <img src={profile} alt="author profile" />
                    <div className="author-info">
                        <span>Romain du Boullay</span>
                        <p>@romain-123</p>
                    </div>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deserunt dolor est nihil. Autem cum omnis, distinctio
                inventore reiciendis impedit?
            </p>
        </section>
    );
}

export default InformationCard
