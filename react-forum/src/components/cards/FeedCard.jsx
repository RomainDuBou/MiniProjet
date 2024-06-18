import React, { useState } from "react";
import profile from "../../assets/pilote.jpg";
import { Button, Form, Input, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./feed-card.css";
import ResponseCard from "./ResponseCard";
import { QuestionApi } from "../../api/QuestionApi";

const FeedCard = ({ item }) => {
    const [form] = Form.useForm();
    const [clickResponse, setClickResponse] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [clickResponseList, setClickResponseList] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        console.log(values);
        setLoading(true);
        QuestionApi.addResponse(values, selectedQuestionId)
            .then((response) => {
                setLoading(false);
                message.success("Réponse soumise avec succès!");
            })
            .catch((error) => {
                message.error("Impossible de répondre à la question");
                setLoading(false);
            });
    };

    const onFinishFailed = () => {
        message.error("Erreur, veuillez remplir tous les champs");
    };

    const showResponseForm = (id) => {
        setSelectedQuestionId(id);
        setClickResponse(!clickResponse);
    };

    const showResponseList = (id) => {
        setSelectedQuestionId(id);
        setClickResponseList(!clickResponseList);
    };

    return (
        <>
            <article className="feed">
                <div className="card-top">
                    <h2>{item.title}</h2>
                    <div className="author">
                        <img src={item?.author?.image} alt="author profile" />
                        <div className="author-info">
                            <span>{item?.author?.name}</span>
                            <p>@{item?.author?.pseudo}</p>
                        </div>
                    </div>
                </div>

                <p>{item?.description}</p>
                <div className="card-bottom">
                    <Button
                        type="link"
                        className="card-bottom-btn"
                        onClick={() => showResponseForm(item.id)}
                    >
                        <EditOutlined />
                        <span>Répondre</span>
                    </Button>

                    <Button
                        type="link"
                        onClick={() => showResponseList(item.id)}
                    >
                        {!item?.responses
                            ? "Aucune réponse"
                            : item.responses.length === 0
                            ? "Aucune réponse"
                            : item.responses.length === 1
                            ? "1 réponse"
                            : `${item.responses.length} réponses`}
                    </Button>
                </div>
            </article>
            {selectedQuestionId == item.id && clickResponse == true && (
                <div className="response-form">
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Votre réponse"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Entrez votre réponse",
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Laissez votre réponse" />
                        </Form.Item>
                        <Button loading={loading} onClick={() => form.submit()}>
                            Répondre
                        </Button>
                    </Form>
                </div>
            )}
            {selectedQuestionId == item.id && clickResponseList == true && (
                <div className="response-list">
                    {item?.responses?.length > 0 ? (
                        item?.responses?.map((response) => (
                            <ResponseCard
                                response={response}
                                key={response.id}
                            />
                        ))
                    ) : (
                        <p>Pas de réponse pour cette question</p>
                    )}
                </div>
            )}
        </>
    );
};

export default FeedCard;
