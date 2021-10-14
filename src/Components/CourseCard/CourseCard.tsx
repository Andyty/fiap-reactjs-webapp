import React from "react";
import { Card } from "react-bootstrap";
import "./CourseCard.scss";

export interface ICourseCardProps {
    nome: string;
    descricao: string;
    porcDesconto?: number;
    urlImagem?: string;
    onCardClick: () => void;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    return (
        <Card className="course-card" onClick={props.onCardClick}>
            {props.porcDesconto && <div className="discount-overlay">{`${props.porcDesconto}% OFF`}</div>}
            <Card.Img className="course-card-img" variant="top" src={/*props.urlImagem ??*/ "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>{props.descricao}</Card.Text>
            </Card.Body>
        </Card>
    );
}