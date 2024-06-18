import React from "react";
import { useState } from "react";
import { Modal, Form, Input, message } from "antd";
import { QuestionApi } from "../../api/QuestionApi";

const AddQuestionModal = ({ open, setOpen }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        QuestionApi.addQuestion(values)
            .then((response) => {
                message.success("Question postée avec succès");
                setLoading(false);
                setOpen(false);
            })
            .catch((error) => {
                message.error("Erreur : Impossible de poster la question");
                setLoading(false);
            });
    };

    const onFinishFailed = () => {
        message.error("Erreur, veuillez remplir tous les champs");
    };

    return (
        <Modal
            title="Ajouter une question"
            centered
            open={open}
            width={1000}
            onCancel={() => setOpen(false)}
            confirmLoading={loading}
            onOk={() => form.submit()}
        >
            <Form
                name="basic"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    label="Titre"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Entrez le titre de la question",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Entrez une description",
                        },
                    ]}
                >
                    <Input.TextArea placeholder="Donnez la description de la question" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddQuestionModal;
