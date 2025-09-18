// import React from 'react'
// import "./SkillCardStyle.css";
// import { CgCPlusPlus } from "react-icons/cg";
// import { SiPython } from "react-icons/si";
// import {DiGit} from "react-icons/di";
// import {SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape } from "react-icons/si";
// import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
// import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

// export default function SkillCard({id}) {
//   return (
//     <>
//         <div className="skill-container" id = {id}>
//           <div className="skill-header">My Skills</div>
//           <div className="skill-box">
//             <h2>Languages</h2>
//             <div className="skillset">
//               <abbr title='C++'><CgCPlusPlus className='techLogo'/></abbr>
//               <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
//               <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
//               <abbr title='Python'><SiPython className='techLogo'/></abbr>
//             </div>                     
//           </div>
//           <div className="skill-box">
//             <h2>Libraries and Frameworks</h2>
//             <div className="skillset">
//               <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
//               <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
//               <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
//               <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
//               <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
//               <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
//             </div>            
//           </div>
//           <div className="skill-box">
//             <h2>Tools & Systems</h2>
//             <div className="skillset">
//               <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
//               <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
//               <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
//             </div>            
//           </div>
//         </div>
//     </>

//   )
// }



import React from 'react'
import "./SkillCardStyle.css";

// Languages
import { CgCPlusPlus } from "react-icons/cg";
import { SiPython } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";

// Tools
import { DiGit } from "react-icons/di";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiVercel } from "react-icons/si";

// Frameworks + DB
import { SiNodedotjs, SiExpress, SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>

        {/* Languages */}
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title='C++'><CgCPlusPlus className='techLogo' /></abbr>
            <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
            <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
            <abbr title='Python'><SiPython className='techLogo' /></abbr>
          </div>
        </div>

        {/* Libraries & Frameworks */}
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title='ReactJS'><SiReact className='techLogo' /></abbr>
            <abbr title='CSS 3'><TbBrandCss3 className='techLogo' /></abbr>
            <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
            <abbr title='NPM'><IoLogoNpm className='techLogo' /></abbr>
            <abbr title='Bootstrap'><SiBootstrap className='techLogo' /></abbr>
            <abbr title='NodeJS'><SiNodedotjs className='techLogo' /></abbr>
            <abbr title='ExpressJS'><SiExpress className='techLogo' /></abbr>
            <abbr title='Tailwind CSS'><SiTailwindcss className='techLogo' /></abbr>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-box">
          <h2>Databases</h2>
          <div className="skillset">
            <abbr title='MongoDB'><SiMongodb className='techLogo' /></abbr>
            <abbr title='MySQL'><SiMysql className='techLogo' /></abbr>
            <abbr title='PostgreSQL'><SiPostgresql className='techLogo' /></abbr>
            <abbr title='Neon (Serverless PostgreSQL)'><SiPostgresql className='techLogo' /></abbr>
          </div>
        </div>

        {/* Tools & Systems */}
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' /></abbr>
            <abbr title='Windows'><IoLogoWindows className='techLogo' /></abbr>
            <abbr title='Figma'><SiFigma className='techLogo' /></abbr>
            <abbr title='Vercel'><SiVercel className='techLogo' /></abbr>
          </div>
        </div>
      </div>
    </>
  )
}
