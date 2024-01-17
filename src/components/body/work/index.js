import React from "react";
import "../../body/about/about.css";
// import nameAudio from "/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/SrishtiPalaniPronunciation.mp3";
import 'antd/dist/antd.css';
import { UpOutlined } from '@ant-design/icons';
import { Button, Card, Divider, BackTop, Carousel} from 'antd';

function Work() {

  return (
    <div className="dei">
      <Divider />
    <span className="info-name"> <strong>Diversity & Inclusion</strong> </span>
<p></p>    
<Carousel autoplay>
      <div>
      <img src={require("../../../assets/HackHolyoke.jpeg")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
        <img src={require("../../../assets/GWC.jpg")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
      <img src={require("../../../assets/k_12_2.png")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
        <img src={require("../../../assets/GWC_classroom.jpg")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
      <img src={require("../../../assets/K_12.png")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
      <img src={require("../../../assets/GIT.jpg")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
      <img src={require("../../../assets/K_12_1.png")} alt="" style={{marginLeft: 'auto', marginRight: 'auto', height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
      <div>
      <img src={require("../../../assets/K_12_4.png")} alt="" style={{marginLeft: 'auto', marginRight: 'auto',height: '400px', width: '100%', objectFit: 'contain'}}/>  
      </div>
    </Carousel>

    <Card
    hoverable={true}
      // title="Bridging the gender gap in STEM"
      style={{marginTop: 16, borderRadius: '14px'}}>
      <h2><strong> Bridging the gender gap in STEM</strong></h2>
      <p><strong>Board Member, <a href="https://gradwic.ucsd.edu/">UCSD Graduate Women in Computing</a></strong> 2019 - 2022</p>
      <ul>
      <li> Organized two conferences for local schools, and three speaker series for undergraduates and
graduates to facilitate interactions with between students and mentors from under-represented
backgrounds in computing</li>
      </ul>
      <p><strong>Graduate Mentorship Coordinator, <a href="https://cogsci.ucsd.edu/">UCSD Cognitive Science</a></strong>, 2019 - 2020</p>
      <ul>
      <li> Created a trans-disciplinary peer mentorship program between graduate students in
computing fields across UCSD</li>
      </ul>

      <p><strong>Co-Founder & Chair, <a href="https://www.mtholyoke.edu/news/news-stories/girls-tech-conference-coming-mhc">MHC Girls in Tech Conference</a></strong>, 2016-2017</p>
      <ul>
        <li> Spearheaded a conference geared for high school girls from suburban New England to teach
    them about the versatility of the tech industry through lightning talks, workshops, and
    mentorship; Led a team of 14 board members, 50+ student volunteers and mentors</li>
        <li> Coordinated over $8,000 in funding and sponsorship </li>
        <li> As Head of Outreach and Sponsorship in 2015-2016: helped found the conference, successfully procured over 15 industry sponsors and 2 award grants of over $15,000; invited and
    organized 10+ speakers and workshop leaders over the next 2 years</li>
      </ul>

      <p><strong>Board Member, <a href="https://hackholyoke.com/"> HackHolyoke'14 - '16</a></strong>, 2014-2016</p>
      <ul>
        <li> Helped organize the first women's college hackathon, the first hackathon to achieve 50:50
gender ratio</li>
        <li> Organized 60+ volunteers and arranged for resources for 400+ hackers over 2
hackathons </li>
      </ul>
</Card>

      <Card
      hoverable={true}
      // title="Community Building and Service"
      // extra={<a href="#">More</a>}
      style={{marginTop: 16, borderRadius: '14px'}}>
      <h2><strong>Community Building and Service</strong></h2>
      <p> <strong>ACM CHI Late Breaking Work, Program Committee Member</strong>, 2024</p>
      <p> <strong>ACM UIST Posters, Program Committee Member</strong></p>
      <p> <strong>Reviewer</strong>, ACM CHI (2021-24), Creativity and Cognition (2021-23), DIS (2023), CSCW (2022) </p>
      <p> <strong>Student Volunteer</strong>, ACM CHI (2020-22), IUI (2021), CSCW (2021), UIST (2021)</p>
      <p> <strong>Co-Organizer, <a href="https://designlab.ucsd.edu/events-all/design-at-large/">Design@Large Seminar: Designing Human-AI Systems for Creativity and Beyond</a></strong>, Winter 2023</p>
      <p><strong>Website Chair, Panelist, Co-Organizer, PhD Open House, UC San Diego Cognitive Science </strong>, 2019-2023</p>
      <p><strong><a href="https://blog.mtholyoke.edu/mhcforever/2015/02/05/building-community-fact-5-harriet-newhall-center">Harriet Newhall Fellow, MHC Office of Admissions</a></strong>, 2017-2018</p>
      <p><strong><a href="https://www.mtholyoke.edu/directory/departments-offices-centers/residential-life">Senior Community Advisor, MHC Office of Residential Life</a></strong>, 2015-2018</p>
      <ul>
        <li> Fostered an inclusive and friendly community in the largest community on campus of 200+
students; Guided 8 Community Advisors to be role models, peer counselors, event planners,
crisis responders</li>
        <li> Directed inclusive programming for the Mary Woolley Floor - MHC's LGBTQIA+ focused
living learning community  </li>
      </ul>
      <p><strong>Student Advisory Committee, MHC Department of Computer Science </strong>, Fall 2016</p>
    </Card>
    <BackTop>
      <Button type="ghost" shape="round" icon={<UpOutlined />} style={{alignContent: "flex-end"}}></Button>
    </BackTop>

    </div>
  );  
}

export default Work;