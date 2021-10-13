import React from "react";
import { Card } from "react-bootstrap";
import "./CourseCard.scss";

export interface ICourseCardProps {
    name: string;
    description: string;
    discount?: number;
    image_url?: string;
    onCardClick: () => void;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    return (
        <Card className="course-card" onClick={props.onCardClick}>
            {props.discount && <div className="discount-overlay">{`${props.image_url}% OFF`}</div>}
            <Card.Img className="course-card-img" variant="top" src={props.image_url ?? "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}