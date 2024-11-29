
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Team = () => {

    const teamData =[
        {
            name:'Bikash Chandra Mishra',
            image:'/Bikash.png',
            layout:'fill',
            social:{
                linkedin:'https://www.linkedin.com/in/bikash-mishra2079/',
                instagram:'https://www.instagram.com/user_ghost_404',
                facebook:'https://www.facebook.com/bikashmishra11',
                github:'https://github.com/bikashmishraa/'
            }
        },
        {
          name:'Aasna Kasajoo',
          image:'/aasna.png',
          layout:'fill',
          social:{
            linkedin:'https://www.linkedin.com/in/aasna-kasajoo-50418b33b/',
            instagram:'https://www.instagram.com/ansaa65/',
            facebook:'https://www.facebook.com/profile.php?id=100082064723648',
            github:'https://github.com/Aasna079'
          }
        },
        {
          name:'Anurag Singh',
          image:'/Anurag.jpg',
          layout:'fill',
          social:{
            linkedin:'',
            instagram:'https://www.instagram.com/710anurag/',
            facebook:'https://www.facebook.com/profile.php?id=100090449943597',
            github:'https://github.com/peachbrains'
          }
        },
        {
            name:'Aaryan Raj Joshi',
            image:'Aaryan.png',
            layout:'fill',
            social:{
                linkedin:'https://www.linkedin.com/in/7n5aj/',
                instagram:'https://www.instagram.com/a.r.jsh/',
                facebook:'https://www.facebook.com/7n5aj',
                github:'https://github.com/7n5aj'
            }
        }

    ]

    return (
      <section className="section-wrapper flex items-center justify-center">
        <div className="flex-center">
          <div className="space-y-8">
            <div className="space-y-3 text-neutral-content">
              <h2 className="text-4xl font-semibold flex items-center justify-center p-8">Team behind ResQCode</h2>
              <p className="text-lg p-3">
                Our team is a group of skilled professionals working together to
                deliver innovative solutions and turn ideas into reality.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2 flex flex-wrap flex-col items-center justify-center">
                {teamData.map((team, idx) => (
                  <div key={idx} className="space-y-2 flex flex-col border p-8">
                    <div
                      className="w-full h-80 bg-center bg-cover bg-no-repeat rounded-lg shadow-lg"
                      style={{ backgroundImage: `url(${team.image})` , position: "relative", width: "100%", paddingBottom: "100%" }}
                    ></div>
                    <div className="text-center space-y-2 flex justify-between">
                      <div className="text-lg font-medium text-neutral-content flex items-center justify-center w-full">
                      <h3 className="text-lg font-medium text-neutral-content flex justify-center items-center">
                        {team.name}
                      </h3>
                      </div>
                      <ul className="flex-center gap-2  text-xl text-neutral-content">
                        <li>
                          <a href={team.social.linkedin}>
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a href={team.social.instagram}>
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a href={team.social.facebook}>
                            <FaFacebook />
                          </a>
                        </li>
                        <li>
                          <a href={team.social.github}>
                            <FaGithub />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
