import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: #f4f4f4;
  padding: 20px;
`;

const ProfileSidebar = styled.div`
  background: white;
  width: 650px;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfilePic = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SectionBox = styled.div`
  background: #ffffff;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  margin: 8px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span`
  background: #4caf50;
  color: white;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  height: 8px;
`;

const Progress = styled.div`
  width: ${(props) => props.progress || "0%"};
  height: 100%;
  background: #4caf50;
  transition: width 0.5s ease-in-out;
`;

const DonateButton = styled.button`
  background: #ff9800;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin-top: 15px;
  font-size: 16px;

  &:hover {
    background: #e68900;
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ProfileSidebar>
        <ProfilePic>W</ProfilePic>
        <h2>User’s Profile</h2>
        <p>woormee912@gmail.com</p>
        <SectionBox>
          <h3>Tags</h3>
          <TagsContainer>
            <Tag>Wildlife Enthusiast</Tag>
            <Tag>Eco-Warrior</Tag>
            <Tag>Nature Lover</Tag>
          </TagsContainer>
        </SectionBox>

        <SectionBox>
          <h3>Donation Details</h3>
          <p style={{ color: "#4caf50", fontWeight: "bold" }}>$0 Donated</p>
          <p>No donations yet.</p>
        </SectionBox>

        <SectionBox>
          <h3>Quiz Progress</h3>
          <ProgressBar>
            <Progress progress="20%" />
          </ProgressBar>
          <p>20% completed</p>
        </SectionBox>

        <SectionBox>
          <h3>Game Progress</h3>
          <ProgressBar>
            <Progress progress="35%" />
          </ProgressBar>
          <p>35% completed</p>
        </SectionBox>

        <DonateButton onClick={() => navigate("/donate")}>Donate Now</DonateButton>
      </ProfileSidebar>
    </PageContainer>
  );
};

export default Profile;
