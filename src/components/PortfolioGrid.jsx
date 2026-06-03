import React from 'react';
import styled from 'styled-components';
import eMDRRMOlogo from "../assets/icon.png";

const projectData = [
  { 
    id: 1, 
    title: "eMDRRMO", 
    creator: "GreatSnipers",
    description: "A digital platform designed to modernize disaster risk management by centralizing real-time hazard monitoring, emergency dispatching, and community alerting to ensure faster, data-driven responses during critical incidents.",
    link: "https://react-e-mdrrmo.vercel.app/",
    githubRepository: "https://github.com/Geyann/react-e-mdrrmo",
    image: eMDRRMOlogo
  },
  
];

const PortfolioGrid = () => {
  return (
    <div className="cyber-pattern p-20 overflow-y-auto no-scrollbar max-h-screen " id="Portfolio">
       <h2 className="text-4xl font-semibold text-center py-10 tracking-tight text-white sm:text-5xl"> Portfolio</h2>
    <StyledWrapper className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((project) => (
        <div className="card " key={project.id}>
          <div className="card-image-container">
            <img src={project.image} alt={project.title} className="card-main-img" />
            <div className="hover-details">
              <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.githubRepository} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <p className="card-title">{project.title}</p>
          <p className="card-des">{project.description}</p>
        </div>
      ))}
    </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  small-gap: 10px;
  gap: 20px;
  justify-content: center;
  
  .card {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.08);
    padding: 30px;
    transition: transform 0.3s ease;
    cursor: none;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card-image-container {
    width: 100%;
    height: 60%;
    border-radius: 10px;
    margin-bottom: 12px;
    position: relative;
    overflow: hidden;
  }

  .card-main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hover-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(23, 151, 184, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    gap: 10px;
  }

  .card:hover .hover-details {
    opacity: 1;
  }

  .hover-details a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: sans-serif;
    border: 1px solid white;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .card-title {
    font-size: 17px;
    font-weight: 600;
    color: #1797b8;
    margin: 5px 0;
  }

  .card-des {
    font-size: 13px;
    color: #555;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default PortfolioGrid;