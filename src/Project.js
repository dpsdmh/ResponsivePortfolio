import React from 'react'
import ProjectData from './Components/ProjectData';
import Cards from './Components/Cards';

function Project() {
  return (
   <>
   <Cards details={ProjectData}/>
   </>
  );
  }


export default Project