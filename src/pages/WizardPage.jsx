import { Form, Input, Select, InputNumber, Button, Descriptions, Card } from "antd";
import { useState } from "react";

export const Wizard = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const [form] = Form.useForm();

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 20px" }}>
            <Card 
                style={{ width: "100%", maxWidth: "500px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                title={submittedData ? "Підсумок" : "Реєстрація"}
            >
                {submittedData ? (
                    <div style={{ width: '100%', height: 400 }}>
                        <Descriptions bordered column={1} size="small" style={{ marginBottom: '20px' }}>
                            <Descriptions.Item label="Ім'я">{submittedData.name}</Descriptions.Item>
                            <Descriptions.Item label="Email">{submittedData['E-mail']}</Descriptions.Item>
                            <Descriptions.Item label="Країна">{submittedData.country}</Descriptions.Item>
                            <Descriptions.Item label="Вік">{submittedData.age}</Descriptions.Item>
                        </Descriptions>
                        <Button type="primary" block onClick={() => { setSubmittedData(null); form.resetFields() }}>
                            Почати заново
                        </Button>
                    </div>
                ) : (
                    <Form form={form} layout="vertical" onFinish={(value) => setSubmittedData(value)}>
                        <Form.Item label="Ім'я" name="name" rules={[{required: true, message: 'Введіть ім\'я!'}]}>
                            <Input placeholder="Ваше ім'я" />
                        </Form.Item>
                        <Form.Item label="Email" name="E-mail" rules={[{type: 'email', message: 'Невірний формат!'}, {required: true, message: 'Введіть email!'}]}>
                            <Input placeholder="example@mail.com" />
                        </Form.Item>
                        <Form.Item label="Країна" name="country" rules={[{ required: true, message: 'Оберіть країну!'}]}>
                            <Select placeholder="Оберіть країну" options={[
                                { value: "ukraine", label: "Україна" },
                                { value: "usa", label: "США" },
                                { value: "poland", label: "Польща" },
                                { value: "germany", label: "Німеччина" },
                                { value: "france", label: "Франція" },
                            ]} />
                        </Form.Item>
                        <Form.Item label="Вік" name="age" rules={[{ required: true, message: 'Введіть вік!' }, { type: 'number', min: 18, max: 100, message: 'Від 18 до 100 років!' }]}>
                            <InputNumber style={{ width: "100%" }} placeholder="18" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Відправити
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Card>
        </div>
    );
};