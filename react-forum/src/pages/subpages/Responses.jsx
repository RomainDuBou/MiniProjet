import React from "react";
import ResponseCard from "../../components/cards/ResponseCard";
import { UserApi } from "../../api/UserApi";
import { useState, useEffect } from "react";
import { message } from "antd";

function Responses() {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        getMyResponses();
    }, []);

    const getMyResponses = () => {
        UserApi.getMyResponses()
            .then((response) => {
                setResponses(response.data.data);
                message.success("Données chargées");
            })
            .catch((error) => {
                message.error("Une erreur est survenue");
            });
    };
    return (
        <section className="feed-page">
            {responses.map((item) => (
                <ResponseCard response={item} key={item.id} />
            ))}
        </section>
    );
}

export default Responses;
