import React from "react";
import { Card } from "react-bootstrap";
import "./CourseCard.scss";

export interface ICourseCardProps {
    image?: string;
    title: string;
    description: string;
    discount?: number;
}

export const CourseCard: React.FC<ICourseCardProps> = (props: ICourseCardProps) => {
    return (
        <Card className="course-card">
            {props.discount && <div className="discount-overlay">{`${props.discount}% OFF`}</div>}
            <Card.Img className="course-card-img" variant="top" src={props.image ?? "/courseImage.png"}></Card.Img>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}