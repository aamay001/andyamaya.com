import React from 'react';

import '../styles/Project.css'

export default (props) => {
  const {project} = props;
  return (
    <div className="project">
      <i>{'{'}</i>
      <p><span className="prop">image</span>: <span className="literal"><a href={project.livePage} target="_blank" rel="noopener noreferrer" ><img src={project.image} alt={project.imageAlt}/></a></span>,</p>
      <p><span className="prop">name</span>: <span className="literal">'{project.name}'</span>,</p>
      <p><span className="prop">scope</span>: <span className="literal">'{project.scope}'</span>,</p>
      <p><span className="prop">stack</span>: <span className="literal">'{project.stack}'</span>,</p>
      <p><span className="prop">devOps</span>: <span className="literal">'{project.devOps}'</span>,</p>
      <p><span className="prop">description</span>: <span className="literal">'{project.description}'</span>,</p>
      <p><span className="prop">apis</span>: <span className="literal">'{project.apis}'</span>,</p>
      { project.clientRepo ?
        <p><span className="func">clientRepo</span>: <span className="literal"><a href={project.clientRepo} target="_blank" rel="noopener noreferrer" >() <span className="arrow">=></span> {project.clientRepo}</a></span>,</p>
        : ''}
      { project.serverRepo ?
        <p><span className="func">serverRepo</span>: <span className="literal"><a href={project.serverRepo} target="_blank"  rel="noopener noreferrer">() <span className="arrow">=></span> {project.serverRepo}</a></span>,</p>
      : ''}
      { project.projectRepo ?
        <p><span className="func">projectRepo</span>: <span className="literal"><a href={project.projectRepo} target="_blank" rel="noopener noreferrer" >() <span className="arrow">=></span> {project.projectRepo}</a></span>,</p>
      : ''}
      <p><span className="func">livePage</span>: <span className="literal"><a href={project.livePage} target="_blank" rel="noopener noreferrer" >() <span className="arrow">=></span> {project.livePage}</a></span></p>
      <i>{'},'}</i>
    </div>
  );
}