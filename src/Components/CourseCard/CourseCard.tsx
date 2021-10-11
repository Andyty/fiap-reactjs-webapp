import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./CourseCard.scss";

export interface ICourseCardProps {
    id: number;
    nome: string;
    descricao: string;
    porc_desconto?: number;
    url_imagem?: string;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    const history = useHistory();
    const onCardClick = () => {
        history.push(`./course/${props.id}`);
    }

    return (
        <Card className="course-card" onClick={onCardClick}>
            {props.porc_desconto && <div className="discount-overlay">{`${props.porc_desconto}% OFF`}</div>}
            <Card.Img className="course-card-img" variant="top" src={props.url_imagem ?? "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>{props.descricao}</Card.Text>
            </Card.Body>
        </Card>
    );
}