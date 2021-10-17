import React from "react";
import { Card } from "react-bootstrap";
import "./CourseCard.scss";

export interface ICourseCardProps {
    nome: string;
    descricao: string;
    porc_desconto?: number;
    url_imagem?: string;
    onCardClick: () => void;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    return (
        <Card className="course-card" onClick={props.onCardClick}>
            {Boolean(props.porc_desconto) && <div className="discount-overlay"><span id="promo-price-label">{`${props.porc_desconto}% OFF`}</span></div>}
            <Card.Img className="course-card-img" variant="top" src={props.url_imagem ?? "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>{props.descricao}</Card.Text>
            </Card.Body>
        </Card>
    );
}