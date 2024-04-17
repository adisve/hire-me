import { Container, Button } from "react-bootstrap";
import { Child } from "../../domain/types";
import { checkIn, checkOut } from "../../data/net_service";
import { useState } from "react";
import { ErrorResponse } from "../../domain/types";

interface ChildPreviewProps {
  child: Child;
}

export const ChildPreview = ({ child }: ChildPreviewProps) => {
  const [checkedIn, setCheckedIn] = useState(child.checkedIn);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckIn = async () => {
    setIsLoading(true);
    const now = new Date();
    now.setHours(now.getHours() + 3);
    const pickupTime = now.toISOString().substr(11, 5);

    try {
      const response = await checkIn(child.childId, pickupTime);
      if (!(response as ErrorResponse).error) {
        setCheckedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleCheckOut = async () => {
    setIsLoading(true);
    try {
      const response = await checkOut(child.childId);
      if (!(response as ErrorResponse).error) {
        setCheckedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <Container className="text-center mb-5 child">
      <img
        draggable="false"
        src={child.image.large}
        alt={child.name.fullName}
      />
      <Container className="child-info-container">
        <p className="child-title">{child.name.fullName}</p>
        {checkedIn ? (
          <Button
            variant="danger"
            onClick={handleCheckOut}
            className="child-button font-weight-bold"
          >
            {isLoading ? "Checking out..." : "Check out"}
          </Button>
        ) : (
          <Button
            onClick={handleCheckIn}
            className="child-button font-weight-bold"
          >
            {isLoading ? "Checking in..." : "Check in"}
          </Button>
        )}
      </Container>
    </Container>
  );
};
