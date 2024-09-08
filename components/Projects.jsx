import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Social from '../public/assets/projects/Social.png';
import Ecart from '../public/assets/projects/Ecart.png'
import orbit from '../public/assets/projects/orbit.png'
import LinkedIn from '../public/assets/projects/LinkedIn.png'
import Music from '../public/assets/projects/Music.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='eCommerece'
            backgroundImg={Ecart}
            projectUrl='https://ecart-main-1.onrender.com/'
            tech='React JS'
          />
           <ProjectItem
            title='Doctor'
            backgroundImg={orbit}
            projectUrl='https://www.orbitclinics.com/'
            tech='React JS'
          />
          <ProjectItem
            title='Social_Media'
            backgroundImg={Social}
            projectUrl='https://github.com/adityadubey00/social'
            tech='React JS'

          />
          <ProjectItem
            title='Music_School'
            backgroundImg={Music}
            projectUrl='https://music-two-snowy.vercel.app/'
            tech='Next JS'

          />
          <ProjectItem
            title='LinkedIn UI'
            backgroundImg={LinkedIn}
            projectUrl='https://66dddcadaeaf6432980bad48--starlit-bienenstitch-6d3395.netlify.app/'
            tech='React JS'

         />
        </div>
      </div>
    </div>
  );
};

export default Projects;
